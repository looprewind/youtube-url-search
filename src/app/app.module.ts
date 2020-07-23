import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HistoryComponent } from './components/history/history.component';
import { VideoViewComponent } from './components/video-view/video-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HistoryComponent,
    VideoViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
