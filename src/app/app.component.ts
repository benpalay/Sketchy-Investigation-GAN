import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FilterService } from './components/services/filter.service';
import { features } from './models/features.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Sketchy';
  constructor(private Title:Title){

  }

  ngOnInit(){
     this.Title.setTitle("Sketchy")
  }

  isReady: Boolean = false;
  timerDone: Boolean = false;
  initialSubmitted:Boolean = false;

  onReady(event: Boolean){
      this.isReady = event;
  }

  onTimer(event: Boolean){
      this.timerDone = event;
  }

  initialSubmit(event: Boolean){
      this.initialSubmitted = event;
  }
}
