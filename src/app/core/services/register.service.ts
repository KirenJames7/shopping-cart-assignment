import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase/app";
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class RegisterService {

  constructor() { }

  /**
   * Email Password Register
   * @param formValues: any
   */
  public doRegister(formValues: any): Promise<UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(formValues.email, formValues.password);
  }

}
