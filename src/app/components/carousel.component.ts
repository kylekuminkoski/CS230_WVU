import { Component } from '@angular/core';
import { Card } from './carouselCards/cards.model';
import { cards } from './carouselCards/mock-cards';


@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ["carousel.component.css"]
  
})
export class CarouselComponent {

  cardvar:Card[] = [];
    
  constructor(){
      for(var cardcomp of cards){
        this.cardvar.push(new Card(cardcomp));
  
      }
    }
  
}