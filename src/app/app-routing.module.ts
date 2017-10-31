import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
// import { HeroListComponent }  from './hero-list.component';  // <-- delete this line
// import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'Movies', component: MovielistComponent },
  { path: 'Home', component: HomeComponent },
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule    
  ]
})  
export class AppRoutingModule {}