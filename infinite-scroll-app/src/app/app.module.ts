import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
