import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  // tslint:disable-next-line:typedef
  getData(){
    const url = 'assets/_gall.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
