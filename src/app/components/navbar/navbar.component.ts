import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  sideNavToggle(){
   this.menuStatus = !this.menuStatus;
   this.sideNavToggled.emit(this.menuStatus);
  }
}
