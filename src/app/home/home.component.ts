import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  data: any = [];
  homedata: any = [];
  slides = [
    {
      image: 'http://enoshkumar.oversee.network/wp-content/uploads/2021/01/maxresdefault.jpg'
    },
    {
      image: 'http://enoshkumar.oversee.network/wp-content/uploads/2021/01/maxresdefault.jpg'
    }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
    this.getHome();
  }

  // tslint:disable-next-line:typedef
  getData(){
    const url = 'assets/output.json';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
    });
  }

  // tslint:disable-next-line:typedef
  getHome(){
    const url = 'assets/_about.json';
    this.http.get(url).subscribe(
      (res) => {
        this.homedata = res;
        console.log(this.homedata);
      }
    );
  }

}
