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
public all = [];


  constructor(private _employeeService:EmployeeService){}

  ngOnInit(): void {
 //   this._employeeService.getEmployees() 
   // .subscribe(data => this.employees =data)
   this._employeeService.getEmployees().subscribe((data: any[])=>{
    console.log(data,'details');
    this.employees.push(data);
    this.all= [...this.employees[0].free, ...this.employees[0].paid]
   // console.log(this.all)

    console.log(this.smile)
   // console.log(Array.isArray(this.employees), 'type is ')
  })  
 
  }

  Search(){
    console.log(this.smile)
    if(this.smile == '') {
      this.all = [...this.employees[0].free, ...this.employees[0].paid]
    }
    this.all = this.all.filter(res=>{
      return res.confName.toLocaleLowerCase().match(this.smile.toLocaleLowerCase()) ;
    });
  
  }

}
