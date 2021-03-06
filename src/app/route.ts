import { Routes } from "@angular/router";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NewTraineeComponent } from './new-trainee/new-trainee.component';

 export const routes: Routes = [
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: 'home',
                            component: HomeComponent
                        },
                        {
                            path: 'reactive-form',
                            component: ReactiveFormComponent
                        },
                        {
                            path: 'form',
                            component: FormComponent
                        },
                        {
                            path: 'new-trainee',
                            component: NewTraineeComponent
                        },
                        {
                            path: '**',
                            component: HomeComponent
                        }
                        
];