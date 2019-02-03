import { Injectable } from '@angular/core';
import * as IO from 'socket.io-client';
import { Subject } from 'rxjs';
import { SocketEvent } from '../models/interfaces/SocketEvent';
import { CreatePlayerPackage } from '../../../../shared/src';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  public newPlayer: Subject<SocketEvent>;

  constructor() {
    this.newPlayer = new Subject<SocketEvent>();
    console.log('connecting');

    this.socket = IO('localhost:4201');

    this.socket.on('connect', () => {
      console.log('connection successfull');
      console.log('creating player');
      const data: CreatePlayerPackage = {
        name: 'arvidsat',
      }
      this.socket.emit('create_player', data);
    })

    this.socket.on('new_player', (data: any) => {
      console.log('event', data);
      this.newPlayer.next({
        message: 'new_player',
        data,
      })
    });
  }
}
