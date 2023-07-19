import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../../services/game-api.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameApiService: GameApiService) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameApiService.getGames().subscribe(
      (games) => {
        this.games = games;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
