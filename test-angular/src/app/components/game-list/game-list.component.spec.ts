import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameListComponent } from './game-list.component';
import { GameApiService } from '../../services/game-api.service';
import { of } from 'rxjs';
import { Game } from '../../models/game';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let gameApiService: GameApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GameListComponent],
      providers: [GameApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    gameApiService = TestBed.inject(GameApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load games on initialization', () => {
    const games: Game[] = [
      {
        id: 1,
        title: 'Game 1',
        thumbnail: 'thumbnail-url-1',
        short_description: 'Description 1'
      },
      {
        id: 2,
        title: 'Game 2',
        thumbnail: 'thumbnail-url-2',
        short_description: 'Description 2'
      }
    ];

    spyOn(gameApiService, 'getGames').and.returnValue(of(games));

    fixture.detectChanges();

    expect(component.games).toEqual(games);
  });
});
