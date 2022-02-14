import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { GamesComponent } from "./components/games/games.component";
import { DetailgameComponent } from "./components/detailgame/detailgame.component";


const routes: Routes = [
  {path: "home", component: HomeComponent}, // Ruta sin redirección
  {path: "games", component: GamesComponent},
  {path: "game/:id", component: DetailgameComponent}, // Ruta con parámetro
  {path: "", redirectTo: "/home", pathMatch: "full"}, // Ruta con redirección
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
