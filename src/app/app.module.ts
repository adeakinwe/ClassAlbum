import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TraineeComponent } from './trainee/trainee.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from 'academy_album/src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouterModule } from '@angular/router';
import { routes } from './route';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';
import { UpdateTraineeComponent } from './update-trainee/update-trainee.component';
import { DeleteTraineeComponent } from './delete-trainee/delete-trainee.component';
import { ViewTraineeComponent } from './view-trainee/view-trainee.component';
import { TraineeService } from './service/trainee.service';

@NgModule({
  declarations: [
    AppComponent,
    TraineeComponent,
    FormComponent,
    ReactiveFormComponent,
    NotFoundComponent,
    HomeComponent,
    NewTraineeComponent,
    UpdateTraineeComponent,
    DeleteTraineeComponent,
    ViewTraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
