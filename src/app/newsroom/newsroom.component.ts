import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopHighlights } from './news/data';
import { map } from 'rxjs';
import gsap from 'gsap';

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
export class NewsroomComponent implements OnInit, AfterViewInit {

  @ViewChild('newsImage', { static: false }) newsImage!: ElementRef;

  public getJsonValue : any;
  public postJsonValue : any;

 
  alltophighlights : TopHighlights[] = [];

  constructor(public http : HttpClient) { }

  @Input() indicators  = true;
  @Input() controls  = true;
  @Input() autoSlide  = false;
  @Input() slideInterval  = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    this.startImageTransition()
  }

  images: string[] = [
    'https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30215.jpg?t=st=1739439580~exp=1739443180~hmac=9d519c989e8a36b0f838d3974f201a6e12e538b164a9456773a8c42a84330dc4&w=1060',
    'https://img.freepik.com/free-photo/handsome-elegant-man-car-salon_1157-30203.jpg?t=st=1739434474~exp=1739438074~hmac=da1890d61f81f9d5e1d3911bf6b375cfd759d6219b1a85b672894ae382373e4b&w=1060',
    'https://img.freepik.com/free-photo/automobile-details-close-up-new-car_1303-26484.jpg?t=st=1739439627~exp=1739443227~hmac=f171955bdf4c2c9cc742e6bdd3cc5b5d5399191b6720ded4bfef04481af25b9d&w=740'
  ];
  currentImageIndex = 0;


  newsroom = [
    {
      category: "New Deals",
      items: [
        {
          title: "Exclusive Car Deals",
          description: "Get up to 15% off on select Toyota models this season.",
          image: "https://via.placeholder.com/300x200",
          link: "#"
        },
        {
          "title": "Trade-In Bonus",
          "description": "Trade in your old car and get up to $2,000 in bonuses.",
          "image": "https://via.placeholder.com/300x200",
          "link": "#"
        }
      ]
    },
    {
      "category": "Sales",
      "items": [
        {
          "title": "Limited-Time Offers",
          "description": "Save big on our latest Toyota SUVs and Sedans. Offers valid till March 2025.",
          "image": "https://global.toyota/pages/news/images/2024/12/20/1330/20241220_01_kv_w1920.jpg",
          "link": "#"
        },
        {
          "title": "0% APR Financing",
          "description": "Finance your new Toyota with 0% APR for up to 36 months.",
          "image": "https://global.toyota/pages/global_toyota/company/vision-and-philosophy/production-system_003_2.jpg",
          "link": "#"
        }
      ]
    },
    {
      "category": "Promotions",
      "items": [
        {
          "title": "Free Maintenance for 1 Year",
          "description": "Buy a new Toyota and enjoy a full year of complimentary maintenance.",
          "image": "https://global.toyota/pages/global_toyota/company/vision-and-philosophy/production-system_002_2.jpg",
          "link": "#"
        },
        {
          "title": "Latest Highlights",
          "description": "Stay updated with Toyota's latest models and upcoming events.",
          "image": "https://via.placeholder.com/300x200",
          "highlights": [
            "2025 Toyota Camry Reveal",
            "Hybrid Innovation in the Automotive Industry",
            "Global Sales Milestone Achieved"
          ],
          "link": "#"
        }
      ]
    }
  ]


  
ngAfterViewInit(): void {
  this.startImageTransition();
}

startImageTransition(): void {
  setInterval(() => {
    gsap.to(this.newsImage.nativeElement, { opacity: 0, duration: 1, onComplete: () => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.newsImage.nativeElement.src = this.images[this.currentImageIndex];
        gsap.to(this.newsImage.nativeElement, { opacity: 1, duration: 1 });
    }});
  }, 6000); // Change image every 6 seconds
}

}
