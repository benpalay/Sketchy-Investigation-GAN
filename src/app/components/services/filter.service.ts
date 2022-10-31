import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { features } from "src/app/models/features.model";

@Injectable()

export class FilterService{

public features: Subject<features> = new Subject();
public initialFeatures: Subject<features> = new Subject();
public indexFinal: Subject<any> = new Subject();
public indexInitial: Subject<any> = new Subject();
public iterations:Subject<any> = new Subject();
public tenArray:Subject<any[]>= new Subject();
public imagesRead: Subject<any>= new Subject();

constructor(){}


}