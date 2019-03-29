import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowerService } from './services/follower.service';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FollowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
