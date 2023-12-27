type ApiActionType = "editor" | "vision" | "thread" | "threads1"
type MessageType = {
  role: "user" | "assistant"
  content: string
  imageUrl?: string[]
}
type RequestDataType = {
  action: ApiActionType,
  userId: string,
  questionId?: string,
  requestId?: string,
  messages: MessageType[]
}
declare Window & typeof globalThis; {
  var callGPT: (data: RequestDataType) => void;
  var addMessage: (data: MessageType) => void

  var sendBodyScrollHeight: () => void

  var Flutter: {
    postMessage:((data: any) => void)
  }
};