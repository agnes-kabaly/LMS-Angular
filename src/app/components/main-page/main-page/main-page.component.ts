import {Component, OnInit } from '@angular/core';
import {User} from "../../../user/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [UserService]
})
export class MainPageComponent implements OnInit {

  userArray: User[] = [];
  email: string;

  constructor(private userService: UserService) { }

  loadAllUser() {
    this.userService.getAllUser().subscribe(data => {
      if (data != null) {
        console.log("nem jött be - ez");
        this.userArray = data;
        console.log(this.userArray);
      }
    })
  }

  ngOnInit(): void {
    this.loadAllUser();
    console.log('oninit');
  }

}
