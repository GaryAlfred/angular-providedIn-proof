import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CounterRootService {
  public count = 0;
  public increment() {
    console.log("increasing count in Root");
    this.count++;
  }
}
