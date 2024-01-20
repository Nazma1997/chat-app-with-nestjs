import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";


@WebSocketGateway(81, { transports: ['websocket'] })
export class Chat {
    @WebSocketServer()

    @SubscribeMessage('messsgae')  
    handleEvent(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return data;
    }

}