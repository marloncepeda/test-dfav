import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { GameFilterComponent } from './game-filter.component';
import { GameApiService } from '../../services/game-api.service';
import { of } from 'rxjs';
import { Game } from '../../models/game';

describe('GameFilterComponent', () => {
  let component: GameFilterComponent;
  let fixture: ComponentFixture<GameFilterComponent>;
  let gameApiService: GameApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [GameFilterComponent],
      providers: [GameApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFilterComponent);
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

  it('should filter games by platform', () => {
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

    spyOn(gameApiService, 'getGamesByPlatform').and.returnValue(of(games));

    component.selectedPlatform = 'pc';
    component.filterGames();

    expect(component.games).toEqual(games);
    expect(gameApiService.getGamesByPlatform).toHaveBeenCalledWith('pc');
  });
});
