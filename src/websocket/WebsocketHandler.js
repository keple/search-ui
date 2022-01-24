import {WebsocketEventEmitter} from "@/websocket/WebSocketEventEmitter";


class WebsocketHandler {
    constructor() {
        this.eventEmiiter = new WebsocketEventEmitter();
        this.eventConsumer = {};
    }

    getEmitter () {
        return this.eventEmiiter;
    }
}

export default new WebsocketHandler();