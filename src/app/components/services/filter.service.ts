import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { features } from "src/app/models/features.model";

@Injectable()

export class FilterService{

public features: Subject<features> = new Subject();

constructor(){}


}