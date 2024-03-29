import { Component, OnInit } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  menuIcon = faBars;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
