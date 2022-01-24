import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'crudp';

  employee:String;
  employeeName:String;
  employeeAge:number;
  employeeAddress:String;
  message:String;

  constructor(public crudservice:CrudService){}
 
  // ngOnInit()
  // {
  //    this.crudService.get_Allemployee().subscribe(data =>{
  //      this.employee = data.map(e =>{
  //        return 
  //        {
  //         id: e.payload.doc.id,
  //         name:e.payload.doc.data()['name'],
  //         age:e.payload.doc.data()['age'],
  //         address:e.payload.doc.data()['address'],
  //        };
  //      }) 
  //      console.log(this.employee); 
  //    });
  // }
  

  CreateRecord()
  {
    let Record = {};
    Record['name'] =  this.employeeName;
    Record['age'] =  this.employeeAge;
    Record['address'] =  this.employeeAddress;

    this.crudservice.create_Newemployee(Record).then(res => { 

      this.employeeName="";
      this.employeeAge = undefined;
      this.employeeAddress = "";
      console.log(res);
      this.message = "Employee data save Done";
      
    }).catch(error =>{
      console.log(error);
    });
    

  }
}
