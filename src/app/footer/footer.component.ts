import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MDCRipple} from '@material/ripple';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('footer') footer: ElementRef;
  copyyr: number = new Date().getFullYear();
  // fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
  constructor() { }

  ngOnInit(): void {
  }

}
