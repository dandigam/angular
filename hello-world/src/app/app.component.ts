import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmployeeServiceService } from './employee-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  employees:any = [];
  public constructor(private _employeeService: EmployeeServiceService) {

  }
  ngOnInit(): void {
    this._employeeService.getEmployee()
    .subscribe(data => this.employees = data);
  }
}
