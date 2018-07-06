import { Component} from '@angular/core';
import {count} from 'rxjs/internal/operators';

@Component({
  selector: 'app-theory2',
  templateUrl: './theory2.component.html',
  styleUrls: ['./theory2.component.css']
})
export class Theory2Component{
    count: number = 1;
    isVisible: boolean = true;

    arr: User[] = [];

  switchParagraph() {
    this.isVisible = !this.isVisible;
  }

  addName() {
    this.arr.push(new User('name ' + this.count, this.count));
    this.count++;
  }
}

class User {
  constructor(public name: string, public id: number){

  }
}
