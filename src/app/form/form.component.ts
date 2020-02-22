import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
name="Abiola";
email="adeakinwe@gmail.com";
formValue;

onSubmit(myForm){
  console.log(myForm.value);
  console.log(this.email);
  this.formValue = myForm.Value;
  myForm.reset();
}

  constructor() { }

  ngOnInit() {
    setTimeout(function(){ 
      this.name = "Akinwe"
    }, 3000),
    setTimeout(function(){ 
      this.name = "Adeseto"
    }, 4000),
    setTimeout(function(){ 
      this.name = "Abiola"
    }, 5000)
  }

}
