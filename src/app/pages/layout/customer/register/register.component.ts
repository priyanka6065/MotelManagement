import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  customer: CustomerModel = <CustomerModel>{};

  constructor(public utilityService: UtilityService, 
    private customerService: CustomerService) {
    this.utilityService.title = "NEW USER";
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(this.customer);
    this.AddCustomer(this.customer);
    // if (this.service.formData.PMId == 0)
    //   this.insertRecord(form);
    // else
    //   this.updateRecord(form);
  }

  AddCustomer = (customer: CustomerModel) => {
    this.customerService.AddCustomer(customer).subscribe((response: any) => {
      if (response.succeeded) {
        console.log(response.data);
        //this.rooms = response.data;
      }
    },
      (err: HttpErrorResponse) => {
        alert(err.message);
      })
  }
}
