import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { GamesComponent } from "./components/games/games.component";

const routes: Routes = [
  {path: "home", component: HomeComponent}, // Ruta sin redirección
  {path: "games", component: GamesComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}, // Ruta con redirección
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
