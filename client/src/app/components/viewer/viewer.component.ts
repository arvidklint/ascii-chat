import { Component, OnInit, ViewChild } from '@angular/core';
import * as Phaser from 'phaser';
import { DataService } from '../../services/data.service';
import { Player } from '../../models/Player';
import { Grid } from '../../models/Grid';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  private app: Phaser.Game;
  private grid: Grid;
  private players: Player[];

  constructor(
    private data: DataService,
    private assets: AssetService,
  ) {
    this.players = [];
    this.grid = new Grid(10, 10, 10);
  }

  ngOnInit() {
    this.app = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container', {
      preload: this.assets.preload,
      // create: this.create
    });

    this.data.players.subscribe((players: Player[]) => {
      players.forEach((newPlayer: Player) => {
        if (!this.players.includes(newPlayer)) {
          
        }
      })
      // Check for new or removed players

      this.players = players;
    });
  }
}
