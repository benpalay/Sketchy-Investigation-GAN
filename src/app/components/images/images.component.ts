import { Component, Input, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { HttpClient, HttpClientModule } from "@angular/common/http";
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
  public noneFound: Boolean = false;
  public features: any[] = [];  
  public initialFilterFeatures: any[] = []
  public initFilterFeatures: any[] = []
  public filterFeatures: any[] = [];
  public chosenFeatures: features;
  public rating: any
  public iterations:any

  public gender:String
  public ethnicity:String
  public eyeColour:String
  public noseWidth:String
  public noseLength:String
  public faceArea:String
  public mouthWidth:String
  public lipThickness:String
  public emotion:String
  public age:String
  public eyeSpacing:String
  public eyeSize:String

  public imageShown:any
  public originalNoseWidth:any
  public originalEyeSpacing:any
  public originalEyeSize:any
  public originalNoseLength:any
  public originalFaceArea:any
  public originalMouthWidth:any
  public originalLipThickness:any
  public originalEmotion:any
  public originalAge:any


  @Input()
  selectedFeatures: features

  constructor( private http: HttpClient, private filterService: FilterService) { }
  
  ngOnInit(): void {
   
    this.iterations=0;
   
    this.readCsvData()
    
    this.filterService.initialFeatures.subscribe(
    data => {
      this.ethnicity = data.ethnicity
      this.gender = data.gender
      this.eyeColour = data.eyeColour
      //hair stuff
      this.findInitialImage()
    })

    this.filterService.features.subscribe(data => {
      this.noseWidth = data.noseWidth
      this.noseLength = data.noseHeight
      this.age = data.age
      this.eyeSize = data.eyeArea
      this.eyeSpacing = data.eyeSpacing
      this.mouthWidth = data.mouthWidth
      this.emotion = data.emotion
      this.faceArea = data.faceArea
      this.lipThickness = data.lipThickness
      this.iterations +=1;
      this.findNewImage()
    })
  }
  
 public onChangeRating(e:any) {
    this.rating= e.target.value;
}

public onLikeness(){
 let date = new Date()
  let rating2={'rating': this.rating, 'iterations':this.iterations, 'UTC time': date}
  this.http.post('https://sketchy-dd393-default-rtdb.europe-west1.firebasedatabase.app/tests.json', rating2)
  .subscribe(res=> {})

}

  private findInitialImage(){

    //put eye colour here, as well as hair colour and length/facil hair
    this.initialFilterFeatures = this.features

    if(this.ethnicity!==""){
      this.initialFilterFeatures = this.initialFilterFeatures.filter(feature => 
          feature.ethnicity === this.ethnicity)
    }
    if(this.gender!==""){
      this.initialFilterFeatures = this.initialFilterFeatures.filter(feature => 
          feature.gender === this.gender)
    }
    if(this.eyeColour!==""){
      this.initialFilterFeatures = this.initialFilterFeatures.filter(feature => 
          feature.eyeColour === this.eyeColour)
    }

    if(this.initialFilterFeatures.length !== 0){
          console.log('initial', this.initialFilterFeatures)
          let index = Math.round(Math.random()*(this.initialFilterFeatures.length-1))
          let id = parseInt(this.initialFilterFeatures[index].id) 
          this.imageIndex = id +1 

          this.onDisplay()
        }
        else{
          this.noneFound = true;     
           }
  }

  
  private findNewImage(){
    this.noneFound = false;
    this.filterFeatures = this.initialFilterFeatures

    this.initFilterFeatures = this.initialFilterFeatures
        this.imageShown = this.initFilterFeatures.filter(feature => parseInt(feature.id) === this.imageIndex-1)
        this.originalNoseWidth = this.imageShown[0].noseWidth
        this.originalNoseLength = this.imageShown[0].noseHeight
        this.originalMouthWidth = this.imageShown[0].mouthWidth
        this.originalLipThickness = this.imageShown[0].lipThickness
        this.originalFaceArea = this.imageShown[0].faceArea
        this.originalEyeSpacing = this.imageShown[0].eyeSpacing 
        this.originalEyeSize = this.imageShown[0].eyeArea 
        
        // this.filterFeatures = this.initialFilterFeatures
        if (this.noseWidth==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.noseWidth>this.originalNoseWidth
        )}
        else if (this.noseWidth ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.noseWidth<this.originalNoseWidth 
        )}
        if (this.noseLength==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.noseLength>this.originalNoseLength
        )}
        else if (this.noseLength ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.noseLength<this.originalNoseLength 
        )}
        if (this.eyeSpacing==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.eyeSpacing>this.originalEyeSpacing
        )}
        else if (this.eyeSpacing ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.eyeSpacing<this.originalEyeSpacing 
        )}
        if (this.eyeSize==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.eyeArea>this.originalEyeSize
        )}
        else if (this.eyeSize ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.eyeArea<this.originalEyeSize 
        )}
        if (this.mouthWidth==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.mouthWidth>this.originalMouthWidth
        )}
        else if (this.mouthWidth ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.mouthWidth<this.originalMouthWidth 
        )}
        if (this.lipThickness==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.lipThickness>this.originalLipThickness
        )}
        else if (this.lipThickness ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.lipThickness<this.originalLipThickness 
        )}
        if (this.faceArea==='bigger'){
        this.filterFeatures = this.filterFeatures.filter(feature => 
           feature.faceArea>this.originalFaceArea
        )}
        else if (this.faceArea ==='smaller'){
            this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.faceArea<this.originalFaceArea 
        )}
        if(this.emotion!==""){
          this.filterFeatures = this.filterFeatures.filter(feature => 
          feature.emotion===this.emotion 
        ) 
        }
        if(this.age=="18"){
          this.filterFeatures = this.filterFeatures.filter(feature => 
          parseInt(feature.age)<=18
        ) }
        if(this.age=="40"){
          this.filterFeatures = this.filterFeatures.filter(feature => 
          parseInt(feature.age)<=39 && parseInt(feature.age)>18
        ) }
        if(this.age=="100"){
          this.filterFeatures = this.filterFeatures.filter(feature => 
          parseInt(feature.age)>=40
        ) }        
        


        console.log(this.filterFeatures)
        if(this.filterFeatures.length !== 0){
          let index = Math.round(Math.random()*(this.filterFeatures.length-1))
          let id = parseInt(this.filterFeatures[index].id)

          this.imageIndex = id +1 

          this.onDisplay()
        }
         else{
            this.noneFound = true;       
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

