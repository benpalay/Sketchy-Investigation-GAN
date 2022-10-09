import { Component, Input, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { HttpClient } from "@angular/common/http";
import { FilterService } from '../services/filter.service';

 @Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  public imageIndex: number = 0;
  public timerDone: Boolean = false;
  public displayNewImage: Boolean = false;
  public features: any[] = [];  
  public initialFilterFeatures: any[] = []
  public initFilterFeatures: any[] = []
  public filterFeatures: any[] = [];
  public chosenFeatures: features;
  public gender:String
  public ethnicity:String
  public eyeColour:String
  public noseWidth:String
  public imageShown:any
  public originalNoseWidth:any


  
  @Input()
  selectedFeatures: features

  constructor( private http: HttpClient, private filterService: FilterService) { }
  
  ngOnInit(): void {
  
   
    this.readCsvData()
    
    this.filterService.initialFeatures.subscribe(
    data => {
      this.ethnicity = data.ethnicity
      this.gender = data.gender
      this.findInitialImage()
    })

    this.filterService.features.subscribe(data => {
      //this.chosenFeatures.age = data.age
      //this.chosenFeatures.ethnicity = data.ethnicity
      //this.chosenFeatures.gender = data.gender
      this.eyeColour = data.eyeColour
      this.noseWidth = data.noseWidth
      this.findNewImage()
    })
  }
  
  private findInitialImage(){
              console.log('features', this.features)

this.initialFilterFeatures = this.features.filter(feature => 
          feature.ethnicity === this.ethnicity && feature.gender === this.gender)
        if(this.initialFilterFeatures.length !== 0){
          console.log('initial', this.initialFilterFeatures)
          let index = Math.round(Math.random()*(this.initialFilterFeatures.length-1))
          let id = parseInt(this.initialFilterFeatures[index].id) 
          this.imageIndex = id +1 

          this.onDisplay()
        }
        else{
          console.log('no matching images')
        }

  }
  private findNewImage(){
    this.initFilterFeatures = this.initialFilterFeatures
        this.imageShown = this.initFilterFeatures.filter(feature => parseInt(feature.id) === this.imageIndex-1)
        this.originalNoseWidth = this.imageShown[0].noseWidth
          
        if (this.noseWidth==='bigger'){
        this.filterFeatures = this.initialFilterFeatures.filter(feature => 
          feature.eyeColour === this.eyeColour && feature.noseWidth>this.originalNoseWidth
        )}
        else if (this.noseWidth==='smaller'){
            this.filterFeatures = this.initialFilterFeatures.filter(feature => 
          feature.eyeColour === this.eyeColour && feature.noseWidth<this.originalNoseWidth
          
        )}
        
        if(this.filterFeatures.length !== 0){
          let index = Math.round(Math.random()*(this.filterFeatures.length-1))
          let id = parseInt(this.filterFeatures[index].id)

          this.imageIndex = id +1 

          this.onDisplay()
        }
         else{
          console.log('no matching images')
        }
  }
  
  private readCsvData() {
      this.http.get('assets/features.csv', {responseType: 'text'})
    .subscribe(
        data => {
          let csvRecordsArray = (<string>data).split(/\r\n|\n/);  
          let headersRow = this.getHeaderArray(csvRecordsArray);  
          this.features = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
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
      for (let i = 1; i < 201; i++) {
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

