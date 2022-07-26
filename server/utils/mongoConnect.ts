import mongoose from 'mongoose'

interface Connection {
  isConnected?: boolean
}

const MONGO_URI = process.env.MONGO_URI as string

const connection: Connection = {}

const mongoConnect = async () => {
  if (connection.isConnected) {
    return
  }

  const db: any = await mongoose.connect(MONGO_URI)

  connection.isConnected = db.connections[0].readyState
}

export default mongoConnect
