import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
 @Input() compteur : number;
 @Output() private changeCompteur : EventEmitter<boolean> = new EventEmitter();

 constructor() { }

  ngOnInit() {
  }
onIncrementer() : void {
this.changeCompteur.emit(true);
}
onDecrementer() : void {
  this.changeCompteur.emit(false);
}
}
