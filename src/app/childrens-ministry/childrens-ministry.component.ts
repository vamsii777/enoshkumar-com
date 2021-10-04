import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-childrens-ministry',
  templateUrl: './childrens-ministry.component.html',
  styleUrls: ['./childrens-ministry.component.css']
})
export class ChildrensMinistryComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    const url = 'assets/_cm.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }

}
