import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent implements OnInit {
  title = 'La Plateforme de ASM';
  constructor(public authService: AuthService) {}
  events: string[] = [];
  opened: boolean = true;
  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }
}