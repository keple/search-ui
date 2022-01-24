import io from 'socket.io-client';

export class WebsocketEventEmitter {
    constructor () {
        this.connect();
    }
    emitEvent (eventName , msg){
        this.socket.emit(eventName,msg);
    }
    connect (){
        this.socket = io("ws://localhost:3031", {
            transports: ['websocket'],
            jsonp: false,
        });
    }
}

