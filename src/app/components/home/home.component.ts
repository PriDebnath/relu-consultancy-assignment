import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sidebarLinks: string[] = ['Home'];
  currentSidebarLink: string = 'home';

  posts = [
    {
      postSrc: '../../../assets/images/post-1.png',
      personSrc: '../../../assets/images/person-ll.png',
      personName: 'Lara Leones',
      personUserName: '@thewallart',
    },
    {
      postSrc: '../../../assets/images/post-2.png',
      personSrc: '../../../assets/images/person-tj.png',
      personName: 'Thomas J.',
      personUserName: '@thecustomcreater',
    },
  ];

  artists = [
    {
      postSrc: '../../../assets/images/artist-post-1.png',
      personSrc: '../../../assets/images/artist-1.png',
      personName: 'Thomas Edward',
      personUserName: '@thewildwithyou',
    },

    {
      postSrc: '../../../assets/images/artist-post-2.png',
      personSrc: '../../../assets/images/artist-2.png',
      personName: 'Chris Doe',
      personUserName: '@thewildwithyou',
    },
    {
      postSrc: '../../../assets/images/artist-post-3.png',
      personSrc: '../../../assets/images/artist-3.png',
      personName: 'Emilie Jones',
      personUserName: '@thewildwithyou',
    },
    {
      postSrc: '../../../assets/images/artist-post-4.png',
      personSrc: '../../../assets/images/artist-4.png',
      personName: 'Jessica Williams',
      personUserName: '@thewildwithyou',
    },
  ];

  constructor() {}

  handleCurrentSidebarLink(link: string) {
    this.currentSidebarLink = link;
  }
}
