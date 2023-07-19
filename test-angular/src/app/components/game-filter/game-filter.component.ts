import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../../services/game-api.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent implements OnInit {
  platforms: string[] = ['pc', 'browser', 'all'];
  selectedPlatform: string = 'all';
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

  filterGames(): void {
    if (this.selectedPlatform === 'all') {
      this.loadGames();
    } else {
      this.gameApiService.getGamesByPlatform(this.selectedPlatform).subscribe(
        (games) => {
          this.games = games;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
