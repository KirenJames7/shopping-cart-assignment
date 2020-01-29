import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services";
import {UserService} from "../../services";
import {AngularFirestore} from "@angular/fire/firestore";
import {CartService} from "../../../shared/services";

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private userService: UserService, private cartService: CartService, private db: AngularFirestore) { }

  ngOnInit() {
    //initialize login form
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  /**
   * Email Password Login
   */
  public login(): void {
    const formValues = this.loginForm.value;
    //check inputs
    if (Object.values(formValues).every(element => element)) {
      this.authService.doLogin(formValues).then(res => {
        //navigate to products
        this.navigateToProducts();
      }, err => {
        //alert error message
        alert(err.message);
      });
    } else {
      //alert empty fields
      alert("Username / Password Empty")
    }
  }

  /**
   * Facebook Login
   */
  public loginFacebook(): void {
    this.authService.doFacebookLogin().then(res => {
      //check if new user
      if (res.additionalUserInfo.isNewUser) {
        //create new cart
        this.cartService.createNewCart();
      }
      //navigate to products
      this.navigateToProducts();
    }, err => {
      //alert error message
      alert(err.message)
    })
  }

  /**
   * Google Login
   */
  public loginGoogle(): void {
    this.authService.doGoogleLogin().then(res => {
      //check if new user
      if (res.additionalUserInfo.isNewUser) {
        //create new cart
        this.cartService.createNewCart();
      }
      //navigate to products
      this.navigateToProducts();
    }, err => {
      //alert error message
      alert(err.message)
    })
  }

  /**
   * Github Login
   */
  public loginGithub(): void {
    this.authService.doGitHubLogin().then(res => {
      //check if new user
      if (res.additionalUserInfo.isNewUser) {
        //create new cart
        this.cartService.createNewCart();
      }
      //navigate to products
      this.navigateToProducts();
    }, err => {
      //alert error message
      alert(err.message)
    })
  }

  /**
   * Navigate to products
   */
  private navigateToProducts() {
    this.router.navigate(['/products']);
  }
}
