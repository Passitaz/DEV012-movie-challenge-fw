import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { OrderButtonComponent } from './components/order-button/order-button.component';
import { BackButtonComponent } from './components/back-button/back-button.component'
import { ClearButtonComponent } from './components/clearbutton/clearbutton.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CardComponent } from './components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './views/details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FilterComponent,
    OrderButtonComponent,
    BackButtonComponent,
    ClearButtonComponent,
    HomeComponent,
    MovieListComponent,
    CardComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
