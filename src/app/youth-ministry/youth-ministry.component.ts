import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-youth-ministry',
  templateUrl: './youth-ministry.component.html',
  styleUrls: ['./youth-ministry.component.css']
})
export class YouthMinistryComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    const url = 'assets/_yth.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }
}
