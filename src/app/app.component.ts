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
  constructor(private Title:Title, private filterService: FilterService){

  }

  ngOnInit(){
     this.Title.setTitle("Sketchy")
     this.filterService.indexInitial.subscribe(idx=> this.imageIndexInitial = idx)
     this.filterService.indexFinal.subscribe(idx=> this.imageIndexFinal = idx)
  }

  isReady: Boolean = false;
  timerDone: Boolean = false;
  initialSubmitted:Boolean = false;
  submitted:Boolean=false;
  public imageIndexInitial:any;
  public imageIndexFinal:any;

  submit(event: Boolean){
    this.submitted = event;
  }

  dispInitial(event:any){
    console.log(event)
    this.imageIndexInitial = event;
  }
    dispFinal(event:any){
      console.log(event.value)
    this.imageIndexFinal = event;
  }
  onReady(event: Boolean){
      this.isReady = event;
  }

  onTimer(event: Boolean){
      this.timerDone = event;
  }

  initialSubmit(event: Boolean){
      this.initialSubmitted = event;
  }
  startAgain(){
    location.reload();

  }
}
