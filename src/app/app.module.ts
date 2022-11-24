import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { DropdownWithIconComponent } from './form/dropdown-with-icon/dropdown-with-icon.component';
import { TextInputWithIconComponent } from './form/text-input-with-icon/text-input-with-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    DropdownWithIconComponent,
    TextInputWithIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
