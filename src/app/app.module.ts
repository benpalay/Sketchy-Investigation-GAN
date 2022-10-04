import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { FilterService } from './components/services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
    //MatMenu
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
