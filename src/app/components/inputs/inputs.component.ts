import { Component, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

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
    this.filterService.initialFeatures.next({'id': '0',
     'age':'0',
     'gender':this.gender,
     'emotion':'0',
     'ethnicity':this.ethnicity,
     'skinColour':'0',
     'eyeColour':'0',
     'hairColour':'0',
     'noseWidth':'0',
     'noseHeight':'0',
     'eyeWidth':'0',
     'eyeArea':'0',
     'eyeSpacing':'0',
     'mouthWidth':'0',
     'lipThickness':'0',
     'faceArea':'0'})

     
  }

  public Update(){

    this.filterService.features.next({'id': '0',
     'age':this.age,
     'gender':'0',
     'emotion':this.emotion,
     'ethnicity':'0',
     'skinColour':'0',
     'eyeColour':this.eyeColour,
     'hairColour':'0',
     'noseWidth':this.noseWidth,
     'noseHeight':this.noseLength,
     'eyeWidth':'0',
     'eyeArea':this.eyeSize,
     'eyeSpacing':this.eyeSpacing,
     'mouthWidth':this.mouthWidth,
     'lipThickness':this.lipThickness,
     'faceArea':this.faceArea})
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
