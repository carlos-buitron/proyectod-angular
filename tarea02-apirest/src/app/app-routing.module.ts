import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Ruteando mis modulos
  { path: "gameofthrone", loadChildren: () => import("./gameofthrone/gameofthrone.module").then(m => m.GameofthroneModule) },
  { path: "harrypotter", loadChildren: () => import("./harrypotter/harrypotter.module").then(m => m.HarrypotterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
