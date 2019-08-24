import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegendsComponent } from './components/legends/legends.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LegendDetailsComponent } from './components/legend-details/legend-details.component';

const routes: Routes = [
  { path: 'legends', component: LegendsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LegendDetailsComponent },  
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
