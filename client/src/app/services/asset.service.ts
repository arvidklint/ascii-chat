import { Injectable } from '@angular/core';
import *  as Phaser from 'phaser';

@Injectable({
    providedIn: 'root'
})
export class AssetService {
    constructor() { }

    public preload(app: Phaser.Game) {
        //app.load.image('')
    }
}
