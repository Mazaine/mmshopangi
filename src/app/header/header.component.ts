import { Component } from '@angular/core';
import { faCartShopping, faBars, faAddressCard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Solid ikonok

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Helyes kulcs
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
  faBars = faBars;
  faAddressCard = faAddressCard;
  faMagnifyingGlass = faMagnifyingGlass;

  searchBarVisible = false; // Kezdetben a keresősáv rejtve van
  searchQuery = '';         // A felhasználó által beírt keresési kifejezés
  searchResults: string[] = []; // Keresési találatok

  cartVisible = false; // Kosár tartalom kezdetben rejtve
  cartItems: string[] = []; // Kosár tartalom példányosítása

 isMenuOpen = false; // Hamburger menü kezdetben rejtve
 isLoginFormVisible = false;

  // Termékek (példa terméklista, amit majd keresni lehet)
  products: string[] = ['Termék 1', 'Termék 2', 'Termék 3', 'Laptop', 'Telefon', 'Tablet'];

  // A keresősáv megjelenítésének váltása
  toggleSearchBar() {
    this.searchBarVisible = !this.searchBarVisible;
    
  }

  // Keresés funkció
  onSearch() {
    if (this.searchQuery) {
      // A keresési találatok szűrése a termékek listájából
      this.searchResults = this.products.filter(product =>
        product.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // Ha a keresési mező üres, nincsenek találatok
      this.searchResults = [];
    }
  }

  // Kosár ikonra kattintás kezelése
  toggleCart() {
    this.cartVisible = !this.cartVisible; // Kosár tartalom láthatóságának váltása
  }

  // Hamburger menü ikonra kattintás kezelése
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Menü láthatóságának váltása
  }

  // Egy példa kosár tartalom hozzáadása
  addItemToCart(item: string) {
    this.cartItems.push(item);
  }
}
