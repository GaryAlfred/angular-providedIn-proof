import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./lazy/lazy-loaded.module").then((m) => m.LazyLoadedModule);
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
