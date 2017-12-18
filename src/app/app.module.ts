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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movielist', component: MovielistComponent},
  { path: 'add-movie', component: AddMovieComponent},
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
