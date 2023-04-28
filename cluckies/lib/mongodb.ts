import { MongoClient, MongoClientOptions, MongoDBNamespace } from 'mongodb'

const uri = process.env.DB_CONNECTION as string
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as MongoClientOptions

let client : MongoClient
let clientPromise : Promise<MongoClient>

client = new MongoClient(uri, options)
clientPromise = client.connect()

async function connectDb() {
  const client = await clientPromise;
  return client.db("Cluckies");
}

export default connectDb