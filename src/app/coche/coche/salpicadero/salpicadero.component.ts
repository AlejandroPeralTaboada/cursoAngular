import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cmd-salpicadero",
  templateUrl: "./salpicadero.component.html",
  styleUrls: ["./salpicadero.component.css"]
})
export class SalpicaderoComponent implements OnInit {
  @Input() public velocidad: number;
  @Input() public marcha: number;

  constructor() {}

  ngOnInit() {}
}
