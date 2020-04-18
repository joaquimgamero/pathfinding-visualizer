import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { NodeComponent } from './grid/node/node.component';
import { GridService } from './services/grid.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NodeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
