import { Component } from '@angular/core';

/*function log(target,name,descriptor){
  console.log(target,name,descriptor)
}*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  Heading = 'FinTrak Academy'
  Title='Class Album'
  activeTrainee;
  Academy= [{image:"./assets/img/Abiola01.jpg",name:'Akinwe', complexion:'Black',hobbies:['Football', 'Coding', 'Music']},
            {image:"./assets/img/Abiola02.jpg",name:'Adeseto', complexion:'Fair',hobbies:['Basketball', 'Reading', 'Football']},
            {image:"./assets/img/Abiola03.jpg",name:'Abiola', complexion:'Black', hobbies:['Singing', 'Cooking', 'Travelling']},
            {image:"./assets/img/Abiola04.jpg",name:'Akinwe', complexion:'Black',hobbies:['Football', 'Coding', 'Music']},
            {image:"./assets/img/Abiola05.jpg",name:'Adeseto', complexion:'Fair',hobbies:['Basketball', 'Reading', 'Football']},
            {image:"./assets/img/Abiola06.jpg",name:'Abiola', complexion:'Black', hobbies:['Singing', 'Cooking', 'Travelling']}
];

traineeListener(trainee: any){
  console.log(trainee);
  this.activeTrainee=trainee;
}
}



