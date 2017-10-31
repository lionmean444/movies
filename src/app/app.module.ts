import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula'; // dragula


import { AppComponent } from './app.component';
//import { FooterComponent } from './shared/layout/footer/footer.component';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
  
} from './shared';
 
import { HomeComponent } from './home/home.component';
import { MovielistComponent } from './movielist/movielist.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movielist', component: MovielistComponent},
   
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovielistComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    DragulaModule,
    //AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
