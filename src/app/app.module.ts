import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CalendarModule } from 'primeng/calendar';
import { FooterComponent } from './footer/footer.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SellerAuthComponent,
    SellerHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule ,
    CalendarModule, // FormsModule hozzáadása az imports tömbhöz
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()), // Új módszer a HttpClient konfigurálásához
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
