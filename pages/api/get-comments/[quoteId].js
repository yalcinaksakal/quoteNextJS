import { MongoClient } from "mongodb";

async function commentHandler(req, res) {
  const { quoteId: reqQuoteId } = req.query;
  const client = await MongoClient.connect(
    "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const commentsCollection = db.collection("comments");
  const comments = await commentsCollection
    .find({ quoteId: reqQuoteId })
    .toArray();
  res.json({
    ok: true,
    data: comments.map(c => ({ commentId: c._id, text: c.commentData.text })),
  });
  client.close();
}

export default commentHandler;
