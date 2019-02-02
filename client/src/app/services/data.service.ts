import { Injectable } from '@angular/core';
import { Player } from '../models/Player';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from './socket.service';
import { SocketEvent } from '../models/interfaces/SocketEvent';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public players: BehaviorSubject<Player[]>;

    constructor(
        private sock: SocketService,
    ) {
        this.players = new BehaviorSubject<Player[]>([]);

        this.sock.newPlayer.subscribe((event: SocketEvent) => {
            this.handleEvent(event);
        })
    }

    private handleEvent(event: SocketEvent): void {
        switch (event.message) {
            case 'new_player': {
                this.players.next([
                    ...this.players.getValue(),
                    new Player(event.data.x, event.data.y, 'p'),
                ])
            }
        }
    }
}
