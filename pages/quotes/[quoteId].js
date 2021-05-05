import { MongoClient, ObjectId } from "mongodb";
import { useState } from "react";

import HighlightedQuote from "../../components/quotes/HighlightedQuote";
import Comments from "../../components/comments/Comments";
const QuoteDetail = props => {
  const [showComments, setShowComments] = useState(false);
  const toggleCommentsHandler = () => {
    setShowComments(prevState => !prevState);
  };
  return (
    <>
      <HighlightedQuote text={props.quote.text} author={props.quote.author} />
      <button
        onClick={toggleCommentsHandler}
        className={`centered ${showComments ? "active" : ""}`}
      >
        Comments
      </button>
      {showComments && <Comments />}
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const quotesCollection = db.collection("quotes");
  const quotes = await quotesCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: quotes.map(quote => ({
      params: { quoteId: quote._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const { quoteId } = context.params;
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const quotesCollection = db.collection("quotes");
  const quote = await quotesCollection.findOne({ _id: ObjectId(quoteId) });

  client.close();

  return {
    props: {
      quote: {
        id: quoteId,
        text: quote.text,
        author: quote.author,
      },
    },
  };
}

export default QuoteDetail;
