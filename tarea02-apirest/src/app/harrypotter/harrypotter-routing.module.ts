import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HarrypotterComponent } from "./harrypotter.component";

const routes: Routes = [{ path: "", component: HarrypotterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarrypotterRoutingModule { }
