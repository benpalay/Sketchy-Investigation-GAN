import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  @Output() 
  ready: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onReady(){
     this.ready.emit(true)
  }
}
