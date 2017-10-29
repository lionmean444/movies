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
import { PlayerListComponent } from './player-list/player-list.component';
import { HomeComponent } from './home/home.component';
import { ScoutsComponent } from './scouts/scouts.component';
import { MedicalComponent } from './medical/medical.component';
import { ReportsComponent } from './reports/reports.component';
import { PlayerStackComponent } from './player-stack/player-stack.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playerlist', component: PlayerListComponent },
  { path: 'playerstack', component: PlayerStackComponent },
  { path: 'scouts', component: ScoutsComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlayerListComponent,
    HomeComponent,
    ScoutsComponent,
    MedicalComponent,
    ReportsComponent,
    PlayerStackComponent,
    
    
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
