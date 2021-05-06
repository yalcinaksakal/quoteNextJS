import { MongoClient } from "mongodb";
async function commentHandler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(
        "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
      const commentsCollection = db.collection("comments");
      await commentsCollection.insertOne(data);
      client.close();
      res.status(201).json({ ok: true, message: "Comment inserted." });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  }
}

export default commentHandler;
