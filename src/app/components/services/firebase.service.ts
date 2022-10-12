import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class FirebaseService{

constructor(private http:HttpClient){}

public storeRatings(){
      this.http.put('https://console.firebase.google.com/u/0/project/sketchy-dd393/database/sketchy-dd393-default-rtdb/data/~2F/tests.json', {'rating': '5', 'time': '2pm', 'iterations':'10'})
}
}