import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-image',
  templateUrl: './countdown-image.component.html',
  styleUrls: ['./countdown-image.component.css']
})
export class CountdownImageComponent implements OnInit {

  public imageIndex: Number = 0;

  @Output() 
  timerDone: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit(): void {    
    this.chooseRandomIndex()
  }


    private chooseRandomIndex(){
     this.imageIndex = Math.round(Math.random()*12); //change to 10000 depending on folder size
     setTimeout(()=>{
      this.timerDone.emit(true)}, 5000) //display for 5 seconds 
     }
}
