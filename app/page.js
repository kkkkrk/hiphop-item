import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"

export default async function Home() {

  const client = await connectDB;
  const db = client.db("yes24_db")
  // let result = await db.collection('music_albums').find().toArray()

  return (
    <div>안녕</div>

  )
}