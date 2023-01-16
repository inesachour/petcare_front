import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from "@angular/common/http";
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home/home-page/home-page.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarLoggedComponent } from './home/navbar-logged/navbar-logged.component';
import { FooterComponent } from './home/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    TextInputWithIconComponent,
    DropdownWithIconComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    NotFoundComponent,
    NavbarLoggedComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ""),
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
