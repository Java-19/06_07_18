import { Component } from '@angular/core';

@Component({
  selector: 'app-teory',
  templateUrl: './teory.component.html',
  styleUrls: ['./teory.component.css']
})
export class TeoryComponent{
  str: string = 'Vasya';
  isDisabled: boolean = true;

  constructor(){
    setInterval(()=>{this.isDisabled = !this.isDisabled},3000);
  }

  printLog(text: string): void{
    console.log(text)
  }

  changeText(event: Event) {
    this.str = (<HTMLInputElement>event.target).value;
  }

  changeText1(value: string) {
    this.str = value;
  }
}
