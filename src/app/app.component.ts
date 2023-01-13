import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.onWindowResize();
  }

  @HostListener('window:orientationchange')
  @HostListener('window:resize')
  onWindowResize(): void {
      document.documentElement.style.setProperty(
        '--app-height',
        `${window.innerHeight}px`
      );

      document.documentElement.style.setProperty(
        '--base-font-size',
        `${window.innerHeight / 45}px`
    );
  }
}


/**
 * Item name
 * Brand
 * Price
 * Quantity
 * 
 */
