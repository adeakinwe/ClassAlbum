import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from 'academy_album/src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TraineeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
