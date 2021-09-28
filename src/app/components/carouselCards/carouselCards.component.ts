import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-carouselcard',
  templateUrl: 'carouselCards.component.html',
  styleUrls: ["carouselCards.component.css"]
  
})
export class CarouselCardComponent {
   @Input()
    title!:string;

    @Input()
    imagePath!:string;

}