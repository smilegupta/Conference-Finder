import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
//   template:`
//   <h2> Employee Details </h2>
//   <ul *ngFor="let employee of employees">
//     <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
// </ul>
//   `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  smile:string;
  public employees = [];
  constructor(private _employeeService:EmployeeService){}

  ngOnInit(): void {
    this._employeeService.getEmployees() 
    .subscribe(data => this.employees =data)
  }
  Search(){
    this.employees = this.employees.filter(res=>{
      return res.confName.toLocaleLowerCase().match(this.smile.toLocaleLowerCase());
    });
  }

}
