import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable()
export class UserService {
  private _user: Observable<firebase.User>;
  private _userDetails: UserModel;

  constructor(private afAuth: AngularFireAuth) {
    this._user = afAuth.authState;
  }

  get user(): Observable<firebase.User> {
    return this._user;
  }

  set user(value: Observable<firebase.User>) {
    this._user = value;
  }

  get userDetails(): UserModel {
    return this._userDetails;
  }

  set userDetails(value: UserModel) {
    this._userDetails = value;
  }
}
