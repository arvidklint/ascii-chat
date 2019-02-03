import IO from 'socket.io';
import { CreatePlayerPackage } from '../../shared/src';

export class Hub {
    constructor(private io: IO.Server) {
        io.on('connection', (socket) => {
            console.log('new connection');
            socket.on('create_player', (data: CreatePlayerPackage) => {
                console.log(`should create the player with name ${data.name}`);
            })
        })
    }
}