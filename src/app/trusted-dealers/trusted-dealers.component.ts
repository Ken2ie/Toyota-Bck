import { Component, OnInit } from '@angular/core';
import {dealerData} from '../trusted-dealers/data';
import {regionsData} from '../trusted-dealers/data';


@Component({
  selector: 'app-trusted-dealers',
  templateUrl: './trusted-dealers.component.html',
  styleUrls: ['./trusted-dealers.component.css']
})
export class TrustedDealersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regions: regionsData[] = [{id: 1, name: "Greater Accra"}, {id: 2, name: "Tarkwa"}, {id: 3, name: "Brong"}];


  // myregion = (<HTMLInputElement>document.getElementById("select")).value;
  // tarkwa: string = 'Tarkwa';
  // kumasi: string = 'Kumasi';


  
  
  regionOne: dealerData[] = [
    {
      name: "Kofi Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Benjamin Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Daniel Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Samuel Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Ezekiel Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Akwasi Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    }
  ]
  regionTwo: dealerData[] = [
    {
      name: "Kwesi Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "John Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Jonah Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "David Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Peter Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    },
    {
      name: "Akwasi Mensah",
      location: "Link",
      serviceOne: "Service 1",
      serviceTwo: "Service 2",
      serviceThree: "Service 3"
    }
  ]
  
  dealersinSight = this.regionOne;
  


}
