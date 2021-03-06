export class Chatroom {
  constructor(public title: string, public chatmessages: Chatmessage[], public imageUrl: string, public id: string) {
    this.title = title;
    this.chatmessages = chatmessages;
    this.imageUrl = imageUrl;
    this.id = id;
  }
}

export class Chatmessage {
  constructor(public text: string, public timestamp: Date) {
    this.text = text;
    this.timestamp = timestamp;
  }
}
