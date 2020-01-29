import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RegisterService} from "../../services";
import {UserService} from "../../services";
import {AngularFirestore} from "@angular/fire/firestore";
import {CartService} from "../../../shared/services";

@Component({
  templateUrl: "register.component.html"
})

export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private errorMessage: string;
  private successMessage: string;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private userService: UserService, private cartService: CartService, private db: AngularFirestore) {
  }

  ngOnInit() {
    //initialize register form
    this.registerForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      "confirm-password": [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  /**
   * Email Password Register
   */
  public tryRegister(): boolean | void {
    const formValues = this.registerForm.value;

    //check empty inputs
    if (!Object.values(formValues).every(element => element)) {
      alert("empty inputs");
      return false;
    }

    //check passwords
    if (formValues.password && formValues.password !== formValues["confirm-password"]) {
      alert("passwords do not match");
      return false;
    }

    //register email password
    this.registerService.doRegister(formValues).then(res => {
      //check if new user
      if (res.additionalUserInfo.isNewUser) {
        //create new cart
        this.cartService.createNewCart();
      }
      //success message
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      //error message
      this.errorMessage = err.message;
      this.successMessage = ""
    })
  }

}
