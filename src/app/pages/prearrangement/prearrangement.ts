import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreArrangementForm} from './pre-arrangement-form/pre-arrangement-form';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReviewPolicies } from './review-policies/review-policies';

@Component({
  selector: 'app-prearrangement',
  imports: [PreArrangementForm, CommonModule, MatIconModule,ReviewPolicies],
  templateUrl: './prearrangement.html',
  styleUrl: './prearrangement.css',
})
export class Prearrangement {
  selectedDepartment: 'IPD' | 'OPD' = 'IPD';
  showForm: boolean = true;
  showReview: boolean = false;
  constructor(private router: Router) {}

  loadForm() {
    this.showForm = true;
    this.showReview = false;
  }

  loadReview() {
    this.showReview = true;
    this.showForm = false;
    console.log("review loaded");
  }

  goBack() {
    this.showForm = false;
  }

  onDepartmentChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDepartment = input.value as 'IPD' | 'OPD';

    if(this.selectedDepartment == 'IPD'){
      this.showForm = true;
    }
    else{
      this.showForm = false;
    }
  }

  onFormSubmit(formValue: any) {    

    console.log('Form submitted with value chils:', formValue);
    this.loadReview();
  }
}
