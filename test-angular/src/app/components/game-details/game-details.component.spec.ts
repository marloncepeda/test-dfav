import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { GameDetailsComponent } from './game-details.component';
import { GameApiService } from '../../services/game-api.service';
import { of } from 'rxjs';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;
  let gameApiService: GameApiService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (key: string) => '1' } }
          }
        },
        {
          provide: GameApiService,
          useValue: {
            getGameById: (id: number) =>
              of({
                id: 1,
                title: 'Game 1',
                thumbnail: 'thumbnail-url-1',
                short_description: 'Description 1'
              })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    gameApiService = TestBed.inject(GameApiService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load game on initialization', () => {
    spyOn(gameApiService, 'getGameById').and.callThrough();

    fixture.detectChanges();

    expect(gameApiService.getGameById).toHaveBeenCalledWith(1);
    expect(component.game).toEqual({
      id: 1,
      title: 'Game 1',
      thumbnail: 'thumbnail-url-1',
      short_description: 'Description 1'
    });
  });
});
