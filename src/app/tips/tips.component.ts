import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
})
export class TipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tips = [
    {
      category: "Vehicle Usage",
      tips: [
        "Avoid aggressive acceleration and braking to improve fuel efficiency and reduce wear on components.",
        "Use cruise control on highways to maintain a steady speed and save fuel.",
        "Ensure tires are properly inflated to the recommended PSI for better mileage and handling.",
        "Regularly check engine oil levels and change oil at recommended intervals.",
        "Drive smoothly and avoid excessive idling to extend the lifespan of your engine."
      ]
    },
    {
      category: "Parts and Maintenance",
      tips: [
        "Use only genuine Toyota parts or OEM-approved alternatives for repairs and replacements.",
        "Check and replace air filters regularly to maintain engine performance and fuel efficiency.",
        "Inspect brake pads and rotors periodically to ensure safe braking performance.",
        "Flush and replace coolant according to Toyota's maintenance schedule to prevent overheating.",
        "Keep an eye on battery health and clean corrosion from terminals to prevent starting issues."
      ]
    }
  ]
  

}
