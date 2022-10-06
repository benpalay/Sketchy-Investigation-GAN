import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  
  isReady: Boolean = false;
  timerDone: Boolean = false;

  onReady(event: Boolean){
      this.isReady = event;
  }

  onTimer(event: Boolean){
      this.timerDone = event;
  }
}
