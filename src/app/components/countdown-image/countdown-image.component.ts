import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-countdown-image',
  templateUrl: './countdown-image.component.html',
  styleUrls: ['./countdown-image.component.css']
})
export class CountdownImageComponent implements OnInit {

  public imageIndex: number = 0;
  public countValue:number=10;

  @Output() 
  timerDone: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() 
  initialImage: EventEmitter<any> = new EventEmitter<any>();
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {    
    this.chooseRandomIndex()
    this.timer()
  }


    private chooseRandomIndex(){
     this.imageIndex = Math.ceil(Math.random()*1000); //change to 10000 depending on folder size
     if (this.imageIndex == 8 ||this.imageIndex == 48 ||this.imageIndex == 133  ){
      this.imageIndex = Math.ceil(Math.random()*200); 
     }
     setTimeout(()=>{
      this.timerDone.emit(true)
      this.filterService.indexInitial.next(this.imageIndex)
    }, 10000) //display for 10 seconds 
     }

  timer(){
    var downloadTimer = setInterval(()=>{
  if(this.countValue <= 0){
    clearInterval(downloadTimer);
  }
  this.countValue -= 1;
}, 1000);

}
}
