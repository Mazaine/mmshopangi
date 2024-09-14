import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Frissítjük az aktuális útvonalat az útvonal eseményei alapján
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.replace('/', '');
      }
    });
  }

  onActivate(event: any) {
    // Az aktuális útvonal beállítása
    this.currentRoute = this.router.url.replace('/', '');
  }
}
