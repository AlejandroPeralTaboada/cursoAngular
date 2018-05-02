import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmd-pedalera',
  templateUrl: './pedalera.component.html',
  styleUrls: ['./pedalera.component.css']
})
export class PedaleraComponent implements OnInit {

  @Output() public acelerar = new EventEmitter<number>();
  @Output() public frenar = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
