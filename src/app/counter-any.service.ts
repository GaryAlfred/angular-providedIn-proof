import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "any"
})
export class CounterAnyService {
  public count = 0;
  public increment() {
    console.log("increasing count in Any");
    this.count++;
  }
}
