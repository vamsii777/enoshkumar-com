import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentsdialog',
  templateUrl: './comdialog.component.html',
  styleUrls: ['./comdialog.component.css']
})
export class ComdialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  openURL(){
    window.open('upi://pay?pa=9440585577@upi&pn=VASAMSETTI%20ENOSH%20KUMAR&cu=INR&mode=02&purpose=00&orgid=189999&sign=MEQCIGUYqxbvfhbZ2rVtkoUyB+KWaK+o+vHJooRkqvgC8iPNAiBRTJ082WwQPUP8TnT2M/PBY2+7nXYiqW9vs00QDA2U4w==');
  }

}
