import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Card } from "./carouselCards/cards.model";



@Injectable({providedIn: 'root'})
export class CarouselService {
    private baseUrl:string = 'https://gamestop-app-default-rtdb.firebaseio.com/';
    private cardEndpoint:string = 'cards.json';
    constructor(private http: HttpClient) {

    }
    getCardInfo(){
        return this.http.get<Card []>(this.baseUrl + this.cardEndpoint);
    }

}