import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../service/trainee.service';
import { ITrainee } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Heading = 'FinTrak Academy';
  Title='Class Album';
  // isTemplateDriven = false;
  // showAlbum = false;
  activeTrainee;
  Academy= [{image:"./assets/img/Abiola01.jpg",name:'Akinwe', complexion:'Black',hobbies:['Football', 'Coding', 'Music']},
            {image:"./assets/img/Abiola02.jpg",name:'Adeseto', complexion:'Fair',hobbies:['Basketball', 'Reading', 'Football']},
            {image:"./assets/img/Abiola03.jpg",name:'Abiola', complexion:'Black', hobbies:['Singing', 'Cooking', 'Travelling']},
            {image:"./assets/img/Abiola04.jpg",name:'Akinwe', complexion:'Black',hobbies:['Football', 'Coding', 'Music']},
            {image:"./assets/img/Abiola05.jpg",name:'Adeseto', complexion:'Fair',hobbies:['Basketball', 'Reading', 'Football']},
            {image:"./assets/img/Abiola06.jpg",name:'Abiola', complexion:'Black', hobbies:['Singing', 'Cooking', 'Travelling']}
];


  constructor(private traineeServ: TraineeService) { }
  trainees: ITrainee[] = [];
  ngOnInit() {
    this.trainees = this.traineeServ.getTrainees();
  }

  traineeListener(trainee: any){
    console.log(trainee);
    this.activeTrainee=trainee;
  }
  
}
