import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlockdetailsComponent} from './blockdetails/blockdetails.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';
import {VisualizationComponent} from './visualization/visualization.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'visualization', component: VisualizationComponent },
  { path: 'blocks/:hash', component: BlockdetailsComponent },
  { path: 'users/:pubkey', component: UserdetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
