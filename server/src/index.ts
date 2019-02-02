import IO from 'socket.io';
import { Player } from './models/Player';

const options: IO.ServerOptions = {
    origins: '*:*'
}

const io = IO(options);

const port = 4201;
io.listen(port);

const players: Player[] = [];

io.on('connection', function (socket) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const newPlayer = new Player(socket, x, y);
    players.push(newPlayer);
    console.log('a user connected', newPlayer.pos);
    io.emit('new_player', newPlayer.pos);
});

export default io;
