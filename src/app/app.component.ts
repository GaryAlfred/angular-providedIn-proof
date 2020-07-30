import { Component } from "@angular/core";
import { CounterRootService } from "./counter-root.service";
import { CounterAnyService } from "./counter-any.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    public counterRoot: CounterRootService,
    public counterAny: CounterAnyService
  ) {}
}
