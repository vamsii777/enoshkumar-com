import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {ComdialogComponent} from '../com-dialog/comdialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  @ViewChild('widgetsContent') widgetsContent: ElementRef;
  data: any = [];
  homedata: any = [];
  panelOpenState = false;
  slides = [
    {
      image: 'assets/_C4A1174.JPG'
    },
    {
      image: 'http://enoshkumar.oversee.network/wp-content/uploads/2021/01/maxresdefault.jpg'
    }
  ];

  public openMenu = false;
  isOver = false;

  ngOnInit(): void {
    this.getData();
    this.getHome();
  }

  // tslint:disable-next-line:typedef
  openDialog() {
    const dialogRef = this.dialog.open(ComdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

  // tslint:disable-next-line:typedef
  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  // tslint:disable-next-line:typedef
  hello(mex: string){
    alert('Hello ' + mex + '!' );
  }
}
