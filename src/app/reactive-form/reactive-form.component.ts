import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myForm: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email:['', Validators.required],
      //gender:['', Validators.required],
      discipline:['', Validators.required],
      stacks:['', Validators.required],
      mobile:['', Validators.required],
      about:['', Validators.required]
    })
  }

  ngOnInit() {
    this.myForm.statusChanges.subscribe((changes) => {
    console.log(changes)
  })
  this.myForm.valueChanges.subscribe((changes) =>{
    console.log(changes)
  })
  }

  done(myForm: FormGroup){
    console.log(myForm.value);
    this.myForm.patchValue({name: 'Adeseto'});
    //this.myForm.setValue({name:'Abiola', email:'abiola@yahoo.com'})
  }

}
