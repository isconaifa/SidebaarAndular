import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
@Input() sideNavStatus: boolean = false;
@Input() extraClass?: string | string[] | { [klass: string]: any };

  list = [
    {
      number: "1",
      name: "Teste a",
      icon: "bi bi-1-square-fill",
    },
    {
      number: "2",
      name: "Teste b",
      icon: "bi bi-2-square-fill",
    },
    {
      number: "3",
      name: "Teste c",
      icon: "i bi-3-square-fill",
    },
    {
      number: "4",
      name: "Teste d",
      icon: "bi bi-4-circle-fill",
    },
    {
      number: "5",
      name: "Teste e",
      icon: "bi bi-5-square-fill",
    },

  ]
  constructor() { }

  ngOnInit(): void {

  }
}
