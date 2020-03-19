import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITrainee } from './../models'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TraineeService } from '../service/trainee.service';

@Component({
  selector: 'app-new-trainee',
  templateUrl: './new-trainee.component.html',
  styleUrls: ['./new-trainee.component.css']
})
export class NewTraineeComponent implements OnInit {
  traineeForm: FormGroup;
  complexion = ['Black', 'Yellow', 'Chocolate', 'White'];
  gender = ['Male', 'Female', 'Others'];
  title = 'Add New Trainee'
  

  constructor(private fb: FormBuilder, private HttpClient: HttpClient,
    private traineeServ: TraineeService) {
    this.traineeForm = this.fb.group({
      name: ['', Validators.required],
      complexion: ['', Validators.required],      
      //hobbies: [''],
      gender: [''],
      dob: [''],
      almamata: [''],
      discipline: [''],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      about: ['']
    })
  }

  ngOnInit() {
  }
  addTrainee(form: FormGroup) {
    console.log(form.value);
     const formData = form.value;
    if(formData.hobbies){
      formData.hobbies = formData.hobbies.split(',')
    }
    const newFormData: ITrainee = formData;
    this.traineeServ.addTrainee(newFormData)
    .subscribe(
      (response)=>{
        console.log(response)
       }, 
    (error) =>{
      console.log(error)
    },
    () =>{});  

    form.reset();

    //this.httpclient.post('https://fintrak-academy-classalbum.firebaseio.com' + '/trainees.json', newFormData)
     
  }
} 
