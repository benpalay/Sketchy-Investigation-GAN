import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-countdown-image',
  templateUrl: './countdown-image.component.html',
  styleUrls: ['./countdown-image.component.css']
})
export class CountdownImageComponent implements OnInit {

  public imageIndex: number = 0;

  @Output() 
  timerDone: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() 
  initialImage: EventEmitter<any> = new EventEmitter<any>();
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {    
    this.chooseRandomIndex()
  }


    private chooseRandomIndex(){
     this.imageIndex = Math.ceil(Math.random()*200); //change to 10000 depending on folder size
     setTimeout(()=>{
      this.timerDone.emit(true)
      this.filterService.indexInitial.next(this.imageIndex)
    }, 1000) //display for 10 seconds 
     }
}
