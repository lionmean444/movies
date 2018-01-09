import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula'; // dragula
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
//import { FooterComponent } from './shared/layout/footer/footer.component';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
  
} from './shared';
 
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { ToWatchListComponent } from './to-watch-list/to-watch-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movielist', component: MovielistComponent},
  { path: 'movielistToWatch', component: MovielistComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'add-towatch-movie/:id', component: EditMovieComponent},
   { path: 'edit-movie/:id', component: EditMovieComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovielistComponent,
    AddMovieComponent,
    EditMovieComponent,
    MoviePosterComponent,
    ToWatchListComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    DragulaModule,
    //AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
