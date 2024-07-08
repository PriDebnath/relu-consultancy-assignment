import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sidebarLinks: string[] = ['Home'];
  postSrc: string[] = ['../../../assets/images/post-1.png'];
  currentSidebarLink: string = 'home';
  constructor() {}
  handleCurrentSidebarLink(link: string) {
    this.currentSidebarLink = link;
  }
}
