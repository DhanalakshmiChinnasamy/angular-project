// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { Component, HostListener, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myVideo: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  // play(){
  //   debugger
  // $('.video').parent().click(this.play(), ()=> {
  //   if($(this).children(".video").get(0).paused){     
  //       $(this).children(".video").get(0).play();  
  //        $(this).children(".playpause").fadeOut();
  //     } 
    //   else{      
    //      $(this).children(".video").get(0).pause();
    // $(this).children(".playpause").fadeIn();
    //   }
//   });
// }
// pause(){
//   $('.video').parent().click(this.play(), ()=> {
//     if($(this).children(".video").get(0).paused){     
//       $(this).children(".video").get(0).pause();
//       $(this).children(".playpause").fadeIn();
//       } 
    //   else{      
    //      $(this).children(".video").get(0).pause();
    // $(this).children(".playpause").fadeIn();
    //   }
//   });
// }
// @HostListener('document:keyup', ['$event'])
//   onKeyUp(ev:KeyboardEvent) {
//     if(ev.code == "Space") {
//       let vid = <HTMLVideoElement>document.getElementById("thisVideo");
//       if(vid.paused) {
//         vid.play();
//       }
//       else {
//         vid.pause();
//       }
//     }
  // }
  play(){
    this.myVideo.play();
  }
}
