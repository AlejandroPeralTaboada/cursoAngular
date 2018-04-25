import { Component } from "@angular/core";

@Component({
  selector: "cmd-root",
  template: `
    <a routerLink="spain" >España</a>
    <a routerLink="italy" >Italy</a>
    <a routerLink="portugal" >Portugal</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "cmd";
}
