import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-genuine-purchase',
  templateUrl: './genuine-purchase.component.html',
  styleUrls: ['./genuine-purchase.component.css']
})
export class GenuinePurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //  Task Bar on scroll
  task_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750){
      this.task_variable =true;
    }else {
      this.task_variable = false;
    }
  }
    
  // Chat Bot
  chatBot(){
    
  }
  
}
