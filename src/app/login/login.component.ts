import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { AuthResponse } from "./loginResponse";

@Component({
    selector: "app-login",
    templateUrl:"login.component.html"
})

export class LoginComponent{
    public buttonClicked!:string;
    private authObservable!:Observable<AuthResponse>;

    constructor(private authService:LoginService){
        
    }
    
    public onSubmit(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);
        if(this.buttonClicked == 'SignUp'){
        this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        if(this.buttonClicked == 'Login'){
            this.authObservable = this.authService.login(data.value.email, data.value.password);
            }
        
        this.authObservable.subscribe(
            (data:AuthResponse) => {
                console.log(data);
             },
             error => {
                 console.log(error.error);
             } 
        );
        data.resetForm();
    }


}