import { Cell } from './interfaces/Cell';
import { Socket } from 'socket.io';

export class Player {
    public pos: Cell;
    private conn;

    constructor(conn: Socket, x: number, y: number) {
        this.conn = conn;
        this.pos = { x, y }
    }
}