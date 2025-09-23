import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('track') track!: ElementRef<HTMLElement>;
  slides: NodeListOf<HTMLElement> = [] as any;
  currentIndex = 0;
  intervalId: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides = this.track.nativeElement.querySelectorAll('.slide');
      this.startAutoSlide();
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.updateSlide();
    }, 5000);
  }

  updateSlide() {
    this.track.nativeElement.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateSlide();
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
