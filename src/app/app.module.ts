import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { NodeComponent } from './grid/node/node.component';
import { GridService } from './services/grid.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
