import { Component } from '@angular/core';
import { CarouselService } from './carousel.service';
import { Card } from './carouselCards/cards.model';


@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ["carousel.component.css"]
  
})
export class CarouselComponent {
  myCards: Card[] | undefined;

  constructor(private cardInfoService: CarouselService){

   

  }
  ngOnInit(): void {
      
      console.log("Registering showUserInfo as a subscriber");
      this.showUserInfo();

  }
  cardss:Card[] = [];

  showUserInfo(){
      this.cardInfoService.getCardInfo().subscribe((data: Card[]) => {
          console.log(data);
          this.myCards = data;

          for(const item in this.myCards){
            this.cardss.push(new Card(this.myCards[item]));
            
          }
      })
  }

 
    
 

   

      
    
  
}