import { MongoClient } from "mongodb";
import Head from "next/head";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
export default function Home(props) {
  return props.quotes.length ? (
    <QuoteList quotes={props.quotes} />
  ) : (
    <NoQuotesFound />
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const quotesCollection = db.collection("quotes");
  const quotes = await quotesCollection.find().toArray();

  client.close();

  return {
    props: {
      quotes: quotes.map(quote => ({
        author: quote.author,
        text: quote.text,
        id: quote._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
