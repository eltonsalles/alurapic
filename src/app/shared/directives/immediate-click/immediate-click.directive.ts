import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[apImmediateClick]',
})
export class ImmediateClickDirective implements OnInit {

  constructor(private element: ElementRef, private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser && this.element.nativeElement.click();
  }

}
