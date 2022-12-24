import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './form/button/button.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    TextInputWithIconComponent,
    DropdownWithIconComponent,
    LoginComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
