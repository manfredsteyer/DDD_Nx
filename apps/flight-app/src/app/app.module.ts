import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { APP_EXTRA_OPTIONS, APP_ROUTES } from "./app.routes";
import { BasketComponent } from "./basket/basket.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BookingFeatureModule } from '@nx-flights/booking/feature';
import { BoardingFeatureModule } from '@nx-flights/boarding/feature';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BookingFeatureModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),
    BoardingFeatureModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
