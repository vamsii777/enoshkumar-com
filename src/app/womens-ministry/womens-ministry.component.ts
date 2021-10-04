import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-womens-ministry',
  templateUrl: './womens-ministry.component.html',
  styleUrls: ['./womens-ministry.component.css']
})
export class WomensMinistryComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    const url = 'assets/_wm.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }

}
