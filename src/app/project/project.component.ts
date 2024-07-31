import { Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @ViewChild('copyTarget') copyTarget!: ElementRef;
  copied: boolean = false;
  HotelBooking:string='https://github.com/jagdishpatil19/Hotel_Managment.git'
  Wheather:string='https://github.com/jagdishpatil19/wheatherApplication.git'
  myPortFolio:string='https://github.com/jagdishpatil19/my-portfolio.git'
 amazone:string='https://github.com/jagdishpatil19/-html-and-css-project/tree/amazone-page'
 youtube:string='https://github.com/jagdishpatil19/-html-and-css-project/tree/you-tube'
 login:string='https://github.com/jagdishpatil19/-html-and-css-project/tree/login-page'
  h:boolean=false
  w:boolean=false
  p:boolean=false
  a:boolean=false
  l:boolean=false
  y:boolean=false

  copyText() {
    const text = this.copyTarget.nativeElement.value;

    // Copy text to clipboard
    navigator.clipboard.writeText(text).then(() => {
      // Show copied message
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 3000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  portFolio(){
 this.p=true
  }
  wheatherApp(){
    this.w=true
  }
  hotel(){
    this.h=true
  }
  amazonePage(){
    this.a=true
  }
  loginpage(){
    this.l=true
  }
  youtubePage(){
    this.y=true
  }
}
