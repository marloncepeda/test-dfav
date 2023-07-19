import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameApiService } from '../../services/game-api.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game | undefined;

  constructor(private route: ActivatedRoute, private gameApiService: GameApiService) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');

    if (gameId) {
      this.loadGame(parseInt(gameId, 10));
    }
  }

  loadGame(id: number): void {
    this.gameApiService.getGameById(id).subscribe(
      (game) => {
        this.game = game;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
