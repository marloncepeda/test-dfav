import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private baseUrl = 'https://www.freetogame.com/api';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`);
  }

  getGamesByPlatform(platform: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games?platform=${platform}`);
  }

  getGamesByCategory(category: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games?category=${category}`);
  }

  getGamesByPlatformAndCategory(platform: string, category: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games?platform=${platform}&category=${category}`);
  }

  getFilteredGames(tags: string, platform: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/filter?tag=${tags}&platform=${platform}`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/game?id=${id}`);
  }
}
