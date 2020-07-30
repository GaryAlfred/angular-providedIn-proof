import { Component } from "@angular/core";
import { CounterRootService } from "../counter-root.service";
import { CounterAnyService } from "../counter-any.service";

@Component({
  selector: "im-lazy",
  template: `
    <h1>LazyComponent</h1>
    <p>
      <button type="button" (click)="counterRoot.increment()">
        Increment Root
      </button>
      <span> {{ counterRoot.count }}</span>
    </p>
    <p>
      <button type="button" (click)="counterAny.increment()">
        Increment Any
      </button>
      <span> {{ counterAny.count }}</span>
    </p>
  `
})
export class LazyComponent {
  constructor(
    public counterRoot: CounterRootService,
    public counterAny: CounterAnyService
  ) {}
}
