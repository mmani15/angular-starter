import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  a: string = '0';
  b: string = '0';
  sum: number;
  subt: number;
  mult: number;
  divd: number;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.add());
    console.log('component initialised');
  }

  add () {
    this.sum = parseInt(this.a, 10) + parseInt(this.b, 10);
  }
  sub () {
    this.subt = parseInt(this.a, 10) - parseInt(this.b, 10)
    
  }
  mul () {
    this.mult = parseInt(this.a, 10) * parseInt(this.b, 10)
  }
  div (){
    this.divd = parseInt(this.a, 10) / parseInt(this.b, 10)
  }

}
