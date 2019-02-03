import IO from 'socket.io';
import { Hub } from './Hub';

const options: IO.ServerOptions = {
    origins: '*:*'
}

const io = IO(options);

const port = 4201;
io.listen(port);

new Hub(io);

export default io;
