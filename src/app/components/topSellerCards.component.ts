import { Component } from '@angular/core';

@Component({
  selector: 'app-topSellerCards',
  templateUrl: 'topSellerCards.component.html',
  styleUrls: ["topSellerCards.component.css"]
  
})
export class topSellerCardsComponent {

    cardName = 'Oculus Quest 2';

    cardImage : string = 'assets/OculusQuest2.webp';
  
}