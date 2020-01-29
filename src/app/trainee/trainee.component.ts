import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {
  @Input() trainee;
  @Output() selectedTrainee: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  traineeSelected(trainee: any){
    this.selectedTrainee.emit(trainee);
  }
}
