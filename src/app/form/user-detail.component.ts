import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { province, Address, User } from './data-model';

@Component({
    selector: 'user-detail',
    templateUrl: './user-detail.html',
})

export class UserDetailComponent {
    @Input() user: User;

    userForm: FormGroup;
    province = province;

    constructor(private formBuilder: FormBuilder){
        this.createFrom();
    }

    createFrom() {
        this.userForm = this.formBuilder.group({
            name: ['', Validators.required],
            //address: this.formBuilder.group(new Address()),
            secretLairs: this.formBuilder.array([]),

        })
    }

    ngOnChange() {
        this.userForm.setValue({
            name: this.user.name,
            address: this.user.addresses[0] || new Address
        });
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.formBuilder.group(address));
        const addressFormArray = this.formBuilder.array(addressFGs);
        this.userForm.setControl('secretLairs', addressFormArray);
    }    
}