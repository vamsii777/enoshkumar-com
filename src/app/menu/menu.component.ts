import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ModulesList} from './menu';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private ren: Renderer2) {
    this.modulesList = ModulesList;
  }
  modulesList: Array<any>;
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;

  events: string[] = [];
  opened: boolean;
  showMenu = false;
  showMenu2 = false;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  @ViewChild('navcontainer') navcontainer: MatSidenavContainer;

  // tslint:disable-next-line:typedef
  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  // tslint:disable-next-line:typedef
  menuLeave(trigger, button) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80);
  }

  // tslint:disable-next-line:typedef
  menu2enter() {
    this.isMatMenu2Open = true;
  }

  // tslint:disable-next-line:typedef
  menu2Leave(trigger1, trigger2, button) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  buttonEnter(trigger) {
    setTimeout(() => {
      // tslint:disable-next-line:triple-equals
      if (this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu();
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-program-focused');
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
        trigger.openMenu();
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(trigger.menu.items.first._elementRef.nativeElement, 'cdk-program-focused');
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger;
      }
    });
  }

  // tslint:disable-next-line:typedef
  buttonLeave(trigger, button) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
        // tslint:disable-next-line:align
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-focused');
        this.ren.removeClass(button._elementRef.nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100);
  }

  // tslint:disable-next-line:typedef
  toggleMenu() {
    this.showMenu = !this.showMenu;
    setTimeout(() => this.navcontainer.updateContentMargins());
  }

  // tslint:disable-next-line:typedef
  toggleMenu2() {
    this.showMenu2 = !this.showMenu2;
    setTimeout(() => this.navcontainer.updateContentMargins());
  }

  ngOnInit(): void {

  }
}
