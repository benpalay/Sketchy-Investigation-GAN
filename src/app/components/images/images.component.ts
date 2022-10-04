import { Component, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { HttpClient } from "@angular/common/http";
import { FilterService } from '../services/filter.service';

 @Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  public imageIndex: Number = 0;
  public timerDone: Boolean = false;
  public displayNewImage: Boolean = false;
  public features: any[] = [];  
  public filterFeatures: any[] = [];
  public chosenFeatures: features;
  public gender:String


  constructor( private http: HttpClient, private filterService: FilterService) { }
  
  ngOnInit(): void {
    this.chooseRandomIndex()
    this.readCsvData()
    this.filterService.features.subscribe(data => {
      //this.chosenFeatures.age = data.age
      //this.chosenFeatures.ethnicity = data.ethnicity
      //this.chosenFeatures.gender = data.gender
      this.gender = data.gender
      this.findNewImage()
    })
  }
  
  private findNewImage(){
        this.filterFeatures = this.features.filter(feature => 
          feature.gender === this.gender)
        if(this.filterFeatures){
          let index = Math.round(Math.random()*(this.filterFeatures.length-1))
        this.imageIndex = this.filterFeatures[index].id
        this.onDisplay()
        }
  }
  private chooseRandomIndex(){
     this.imageIndex = Math.round(Math.random()*12); //change to 10000 depending on folder size
     setTimeout(()=>{
      this.timerDone = true}, 5000) //display for 5 seconds 
     }

  private readCsvData() {
      this.http.get('assets/features.csv', {responseType: 'text'})
    .subscribe(
        data => {
          let csvRecordsArray = (<string>data).split(/\r\n|\n/);  
          let headersRow = this.getHeaderArray(csvRecordsArray);  
          this.features = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
          console.log('Features' , this.features)
        },
        error => {
            console.log(error);
        }
    );
  }
     
  
  public onDisplay(){
     //this.imageIndex = Math.round(Math.random()*12);
     this.displayNewImage = true;
     this.displayFiltered()
  }

  public displayFiltered(){
      
  }

  private getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    //for (let i = 1; i < csvRecordsArray.length; i++) {  
      for (let i = 1; i < 13; i++) {
        let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
        let csvRecord: features = new features();  
        csvRecord.id = curruntRecord[0].trim();
        csvRecord.age = curruntRecord[1].trim();  
        csvRecord.gender = curruntRecord[2].trim();  
        csvRecord.emotion= curruntRecord[3].trim();  
        csvRecord.ethnicity = curruntRecord[4].trim();  
        csvRecord.skinColour = curruntRecord[5].trim();  
        csvRecord.eyeColour = curruntRecord[6].trim();
        csvRecord.hairColour = curruntRecord[7].trim();
        csvRecord.noseWidth = curruntRecord[8].trim();
        csvRecord.noseHeight = curruntRecord[9].trim();
        csvRecord.eyeWidth = curruntRecord[10].trim();  
        csvRecord.eyeArea = curruntRecord[11].trim();  
        csvRecord.eyeSpacing = curruntRecord[12].trim();  
        csvRecord.mouthWidth = curruntRecord[13].trim();  
        csvRecord.lipThickness = curruntRecord[14].trim();  
        csvRecord.faceArea = curruntRecord[15].trim();  

        csvArr.push(csvRecord);  
      }

      return csvArr
    }  
  
  private getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  

}  

