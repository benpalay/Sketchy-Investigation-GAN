import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  @Output() 
  ready: EventEmitter<Boolean> = new EventEmitter<Boolean>();


  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

 async onReady(){
     this.ready.emit(true)
  }
}
