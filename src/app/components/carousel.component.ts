import { Component } from '@angular/core';
import { Card } from './carouselCards/cards.model';
import { cards } from './carouselCards/mock-cards';


@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ["carousel.component.css"]
  
})
export class CarouselComponent {

  cardss:Card[] = [];
    
  constructor(){
      for(var card of cards){
        this.cardss.push(new Card(card));
  
      }
    }
  
}