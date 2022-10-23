import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string; 
}

// interface carouselInfo{
//   detail: string;
//   info: string;
// }

@Component({
  selector: 'app-newsroom',
  templateUrl: './newsroom.component.html',
  styleUrls: ['./newsroom.component.css']
})
export class NewsroomComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators  = true;
  @Input() controls  = true;
  @Input() autoSlide  = false;
  @Input() slideInterval  = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      // this.autoSlideImages();
    }
  }

  // Chane
  // autoSlideImages(): void{
  //   setInterval(() => {
  //     this.onNextClick();
  //   }, this.slideInterval);
  // }


  // onNextClick(): void{
  //   if(this.selectedIndex === this.images.length - 1){
  //     this.selectedIndex = 0;
  //   }else{
  //     this.selectedIndex++;
  //   }
  // }

  // Sets Index of image on dot/indicator click
  // selectedImage(index: number): void{
  //   this.selectedIndex = index;
  // }




}
