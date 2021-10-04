import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  data: any = [];
  homedata: any = [];

  ngOnInit(): void {
    this.getData();
    this.getHome();
  }

  // tslint:disable-next-line:typedef
  getData() {
    const url = 'assets/_yth.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }

  // tslint:disable-next-line:typedef
  getHome(){
    const url = 'assets/_aboutp.json';
    this.http.get(url).subscribe(
      (res) => {
        this.homedata = res;
        console.log(this.homedata);
      }
    );
  }
}
