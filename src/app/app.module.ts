import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EsModule } from "./es/es.module";
import { AppRouterModule } from "./app-router.module";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRouterModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
