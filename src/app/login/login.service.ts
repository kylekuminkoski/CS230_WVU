import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "./loginResponse";


@Injectable({
    providedIn:'root'
})
export class LoginService{
    baseUrl:string="https://identitytoolkit.googleapis.com/v1/accounts";
    signUpEndpoint:string ="signUp";
    signInEndpoint:string = "signInWithPassword";


    public constructor(private http:HttpClient){

    }

  

public signup(email:string, password:string){
    const requestBody = {
        "email":email,
        "password":password,
        "returnSecureToken":true
    };
    
     return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signUpEndpoint}?key=AIzaSyCjAAU6znf_GHRU8AZqR5Tt2UudD-rpNi0`, requestBody);

 }
 public login(email:string, password:string){
     const requestBody = {
         "email":email,
         "password":password,
         "returnSecureToken":true
     };

     return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signInEndpoint}?key=AIzaSyCjAAU6znf_GHRU8AZqR5Tt2UudD-rpNi0`,requestBody);
 }
}