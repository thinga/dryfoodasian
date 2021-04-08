import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './nav/members/members.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate: [AuthGuard],
    children: [
          {path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
          
    ]

  },
  {path: '**', component: HomeComponent, pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
