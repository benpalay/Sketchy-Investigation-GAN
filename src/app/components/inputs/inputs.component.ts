import { Component, OnInit } from '@angular/core';
import { features } from 'src/app/models/features.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  age: String;
  ethnicity: String;
  gender:String;
  features: features;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  public Update(){
       console.log(this.gender)

    //this.features.age = this.age
    //this.features.ethnicity = this.ethnicity
    //this.features.gender = this.gender
    this.filterService.features.next({'id': '0',
     'age':'0',
     'gender':this.gender,
     'emotion':'0',
     'ethnicity':'0',
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


//   onChangeAge(e) {
//    this.age= e.target.value;

// }

//   onChangeEthnicity(e) {
//    this.ethnicity= e.target.value;
//    console.log(this.ethnicity)
// }

  onChangeGender(e:any) {
   this.gender= e.target.value;
}
}
