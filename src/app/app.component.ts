import { HttpClient } from '@angular/common/http';
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
  constructor(private Title:Title, private filterService: FilterService,private http: HttpClient){

  }

  ngOnInit(){
     this.Title.setTitle("Sketchy")
     this.filterService.indexInitial.subscribe(idx=> this.imageIndexInitial = idx)
     this.filterService.indexFinal.subscribe(idx=> this.imageIndexFinal = idx)
     this.filterService.iterations.subscribe(it=>this.iterations=it)
     this.filterService.tenArray.subscribe(ten=> {
      this.tenReceived=true;
      this.imageIndex1 = ten[0]
      this.imageIndex2 = ten[1]
      this.imageIndex3 = ten[2]
      this.imageIndex4 = ten[3]
      this.imageIndex5 = ten[4]
      this.imageIndex6 = ten[5]}
      )
  }

  isReady: Boolean = false;
  timerDone: Boolean = false;
  initialSubmitted:Boolean = false;
  submitted:Boolean=false;
    submitted2:Boolean=false;

  tenReceived:Boolean=false;
  finalClicked:Boolean=false;
  finalSubmitted:Boolean=false;
  public imageIndexInitial:any;
  public imageIndexFinal:any;
  public imageIndex1:number =0;
  public imageIndex2:number =0;
  public imageIndex3:number =0;
  public imageIndex4:number =0;
  public imageIndex5:number =0;
  public imageIndex6:number =0;
  public rating: any
  public iterations:any

  submit(event: Boolean){
    this.submitted = event;
    this.finalSubmitted = event;
  }

  dispInitial(event:any){
    this.imageIndexInitial = event;
  }
    dispFinal(event:any){
    this.imageIndexFinal = event;
  }
  displayTen(event:any){
    this.tenReceived=true;
      this.imageIndex1 = event[0]
          this.imageIndex2 = event[1]
      this.imageIndex3 = event[2]

  }
  onReady(event: Boolean){
      this.isReady = event;
  }

  onTimer(event: Boolean){
      this.timerDone = event;
  }
  setIterations(event:any){
    this.iterations=event.value
  }

  initialSubmit(event: Boolean){
      this.initialSubmitted = event;
  }
  startAgain(){
    location.reload();

  }
goBackUpdate(){
  this.tenReceived = false;
  this.filterService.gobackUpdate.next(this.iterations)
}
  finalImage(finalImageIndex:any){
    this.finalClicked = true;
    if (finalImageIndex==1){
    this.imageIndexFinal = this.imageIndex1}
     if (finalImageIndex==2){
    this.imageIndexFinal = this.imageIndex2}
     if (finalImageIndex==3){
    this.imageIndexFinal = this.imageIndex3}
     if (finalImageIndex==4){
    this.imageIndexFinal = this.imageIndex4}
     if (finalImageIndex==5){
    this.imageIndexFinal = this.imageIndex5}
     if (finalImageIndex==6){
    this.imageIndexFinal = this.imageIndex6}
  }

  public onChangeRating(e:any) {
    this.rating= e.target.value;
}

public onLikeness(){
 let date = new Date()
  let rating2={'rating': this.rating, 'iterations':this.iterations, 'UTC time': date}
  this.http.post('https://sketchy-b3e32-default-rtdb.europe-west1.firebasedatabase.app/results4000.json', rating2)
  .subscribe(res=> {})
  this.submitted2 =true;
  //this.onSubmit.emit(true)
}
}
