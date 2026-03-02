import { Component } from '@angular/core';
import { DartsPlayer, PLAYERS_LIST } from './players';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  players = PLAYERS_LIST;

  isFormVisible = false;

  newPlayer = this.defaultPlayer();

  deletePlayer(player: DartsPlayer) {
    const idx = this.players.indexOf(player);
    if (idx > -1) {
      this.players.splice(idx, 1);
    }
  }

  defaultPlayer(): DartsPlayer {
    return {
      id: 0,
      name: '',
      nickname: '',
      rank: 0,
      experience: '0-5',
      salary: 0
    };
  }

  savePlayer() {
    this.players.push(this.newPlayer);
    this.newPlayer = this.defaultPlayer();
    this.isFormVisible = false;
  }
}