import { Component } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) { }
  title = 'iraitech';
  arrs = [2, 3, 10, 15, 26, 35, 50, 63];

  isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}


  openSnackBar(val: string, action: string) {
    let newVal = (Number(val) * Number(val))
    if(this.isEven(val)){
       newVal -= 1
    } else { newVal += 1}
    this._snackBar.open(newVal.toString(), action = "x", {
      duration: 2000,
    });
  }
}
