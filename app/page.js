import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"
import HotArtist from "./Hotartist/page";

export default async function Home() {

  const client = await connectDB;
  const db = client.db("yes24_db")
  let result = await db.collection('music_albums').find().toArray()
  console.log("-----------------")
  console.log(result)
  return (
    <HotArtist />
  )
}