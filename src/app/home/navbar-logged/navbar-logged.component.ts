import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.css']
})
export class NavbarLoggedComponent implements OnInit {
  showMenu = false;
  menuIcon = faBars;
  @Input() bgColor :string = "FFA630"
  @Input() textBlack :boolean = false
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
  logout(){
    console.log("logout");
    this.loginService.logout();
    this.router.navigate(['/home'],).then(() => {
      window.location.reload();
    });
  }

}
