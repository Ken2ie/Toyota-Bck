import { Component } from '@angular/core';
import * as THREE from '@angular-three/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ToyotaBck';

  isSearchOpen: boolean = false;

  openSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // Global Button

  isMenuOpen: boolean = false;

  openGlobal(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // NewsRoom
  images = [
    {
      imageSrc: '../assets/images/news3.jpg',
      imageAlt: 'News One',
    },
    {
      imageSrc: '../assets/images/news1.jpg',
      imageAlt: 'News Two',
    },
    {
      imageSrc: '../assets/images/news2.jpg',
      imageAlt: 'News Three',
    },
    {
      imageSrc: '../assets/images/news3.jpg',
      imageAlt: 'News Four',
    },
    {
      imageSrc: '../assets/images/news4.png',
      imageAlt: 'News Five',
    },
  ];


  // Video Mute
  // window.onload = function () {
  //   var element = document.getElementById('video');
  //   this.element.muted = "muted";
  // }
}
