import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  elem: any;
  isFullScreen: boolean=false;

  constructor(@Inject(DOCUMENT) private document: any) {
    // this.isFullScreen=false;
}
  ngOnInit(): void {
    this.elem = this.document.documentElement;
    this.chkScreenMode();
    
}

@HostListener('document:fullscreenchange', ['$event'])
    @HostListener('document:webkitfullscreenchange', ['$event'])
    @HostListener('document:mozfullscreenchange', ['$event'])
    @HostListener('document:MSFullscreenChange', ['$event'])

    fullScreenChange() {
        console.log("Recieved");
        this.isFullScreen = !this.isFullScreen;
    }

   openFullscreen() {
    if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
    }
}

  fullscreenmodes(){
    this.chkScreenMode();
  }
  chkScreenMode(){
    if( this.elem.fullscreen){
      //fullscreen
      this.isFullScreen = true;
    }else{
      //not in full screen
      this.isFullScreen = false;
    }
  }

  closeFullscreen() {
    debugger;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

}
