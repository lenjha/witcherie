import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CommunityComponent,
    HomeComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
