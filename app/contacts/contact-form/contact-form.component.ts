import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  @Output() newContactSubmitted = new EventEmitter<Contact>();
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, contactsService: ContactsService) {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: this.fb.group({
        givenName: 'Wayne',
        familyName: 'Riesterer',
      }),
      departments: this.fb.array([
        this.fb.group({
          name: 'Innovation',
          roles: this.fb.array([
            this.fb.group({
              name: 'Manager'
            })          
          ])
        })
      ])
    })
  }

  getDepartments(): FormArray {
    return this.contactForm.get('departments') as FormArray;
  }

  onAddDepartment(): void {
    this.getDepartments().push(
      this.fb.group({
        name: '',
        roles: this.fb.array([])
      })
    )
  }

  getRoles(index: number): FormArray {
    return this.getDepartments().at(index).get('roles') as FormArray;
  }

  getRole(departmentIndex: number, roleIndex: number): FormControl {
    return this.getRoles(departmentIndex).at(roleIndex) as FormControl;
  }

  onAddRole(index: number): void {
    this.getRoles(index).push(
      this.fb.group({
        name: ''
      })
    )
  }

  onSubmit(): void {
    this.newContactSubmitted.emit(this.contactForm.value);
  }

  onClear(): void {
    for (let i = this.getDepartments().length - 1; i >= 0; i--) {
      for (let j = this.getRoles(i).length - 1; j >= 0; j--) {
        this.getRoles(i).removeAt(j);
      }
      this.getDepartments().removeAt(i);
    }
    this.contactForm.reset({
      name: {
        givenName: '',
        familyName: ''
      }
    });
  }
}