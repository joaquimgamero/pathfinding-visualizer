import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { NodeComponent } from './grid/node/node.component';
import { GridService } from './services/grid.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LegendComponent } from './legend/legend.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PageOneComponent } from './tutorial/page-one/page-one.component';
import { PageTwoComponent } from './tutorial/page-two/page-two.component';
import { PageThreeComponent } from './tutorial/page-three/page-three.component';
import { PageFourComponent } from './tutorial/page-four/page-four.component';
import { PageFiveComponent } from './tutorial/page-five/page-five.component';
import { PageSixComponent } from './tutorial/page-six/page-six.component';
import { PageSevenComponent } from './tutorial/page-seven/page-seven.component';
import { PageEightComponent } from './tutorial/page-eight/page-eight.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NodeComponent,
    HeaderComponent,
    LegendComponent,
    FooterComponent,
    InfoComponent,
    TutorialComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageEightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [GridService],
  bootstrap: [AppComponent],
  entryComponents: [TutorialComponent]
})
export class AppModule { }
