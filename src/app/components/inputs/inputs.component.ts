import { Component, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  goback:Boolean=false;
  age: String = '';
  ethnicity: String = '';
  gender:String = '';
  eyeColour:String = '';
  eyeSize:String = '';
  eyeSpacing:String = '';
  noseWidth:String = '';
  noseLength:String = '';
  emotion:String='';
  mouthWidth:String='';
  lipThickness:String='';
  faceArea:String = '';

  
  features: features;
  initialSubmitted:Boolean  =false;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }  

  public onSubmit(){
     this.initialSubmitted = !this.initialSubmitted
    this.filterService.initialFeatures.next({'id': "",
     'age':"",
     'gender':this.gender,
     'emotion':"",
     'ethnicity':this.ethnicity,
     'skinColour':"",
     'eyeColour':this.eyeColour,
     'hairColour':"",
     'noseWidth':"",
     'noseHeight':"",
     'eyeWidth':"",
     'eyeArea':"",
     'eyeSpacing':"",
     'mouthWidth':"",
     'lipThickness':"",
     'faceArea':""})

     
  }

  public Update(){

    this.filterService.features.next({'id': "",
     'age':this.age,
     'gender':"",
     'emotion':this.emotion,
     'ethnicity':"",
     'skinColour':"",
     'eyeColour':"",
     'hairColour':"",
     'noseWidth':this.noseWidth,
     'noseHeight':this.noseLength,
     'eyeWidth':"",
     'eyeArea':this.eyeSize,
     'eyeSpacing':this.eyeSpacing,
     'mouthWidth':this.mouthWidth,
     'lipThickness':this.lipThickness,
     'faceArea':this.faceArea})
  }

public goBack(){
   this.initialSubmitted = false;
}
 onChangeEthnicity(e:any) {
    this.ethnicity= e.target.value;
}

  onChangeGender(e:any) {
   this.gender= e.target.value;
}

onChangeEyeColor(e:any) {
   this.eyeColour= e.target.value;
}

onChangeEyeSize(e:any) {
   this.eyeSize= e.target.value;
}

onChangeEyeSpacing(e:any) {
   this.eyeSpacing= e.target.value;
}

onChangeAge(e:any) {
   this.age= e.target.value;
}

onChangeNoseWidth(e:any) {
   this.noseWidth= e.target.value;
}
onChangeNoseLength(e:any) {
   this.noseLength= e.target.value;
}

onChangeFaceArea(e:any) {
   this.faceArea= e.target.value;
}

onChangeMouthWidth(e:any) {
   this.mouthWidth= e.target.value;
}
onChangeLipThickness(e:any) {
   this.lipThickness= e.target.value;
}
onChangeEmotion(e:any) {
   this.emotion= e.target.value;
}

}
