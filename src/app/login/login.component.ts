import { Component } from "@angular/core";
import { UserInfo } from "../backend/user-info.model";
import { UserInfoService } from "../backend/user-info.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    constructor(private infoService: UserInfoService){

    }


onUpdateUserInfo(data: UserInfo){

    console.log("Submitted new account.");
    console.log(data);
    this.infoService.modifyUserInfo(data).subscribe(data => {
        console.log("Updated Information sent to backend.")
    });
}

}