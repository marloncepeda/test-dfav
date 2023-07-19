import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFilterComponent } from './components/game-filter/game-filter.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';


const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'filter', component: GameFilterComponent },
  { path: 'game/:id', component: GameDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
