import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/generatedTypes/chat'
import { ChatHandlers } from './proto/generatedTypes/chat/Chat'
import { GetMessages } from './services/chatService'

const PORT = 8082
const SERVER_URI = `0.0.0.0:${PORT}`;

const PROTO_FILE = './proto/chat.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const chatPackage = grpcObj.chat


const server = new grpc.Server()

server.addService(chatPackage.Chat.service, {
  GetMessages,
  
//   ReceiveMessages: (call) => {
//     console.log('ReceiveMessages called')
//     call.write({ text: 'Hello' })
//     call.write({ text: 'World' })
//     call.end()
//   },
//   SendMessage: (call, callback) => {
//     console.log('SendMessage called with', call.request)
//     callback(null, {})
//   },
})


server.bindAsync(SERVER_URI, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    // server.start()
});