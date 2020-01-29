import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase/app";
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {


  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  /**
   * Email Password Login
   * @param formValues
   */
  public doLogin(formValues: any): Promise<UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(formValues.username, formValues.password);
  }

  /**
   * Facebook Login
   */
  public doFacebookLogin(): Promise<UserCredential> {
    let provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  /**
   * Google Login
   */
  public doGoogleLogin(): Promise<UserCredential> {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(provider);
  }

  /**
   * Github Login
   */
  public doGitHubLogin(): Promise<UserCredential> {
    let provider = new firebase.auth.GithubAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }

  /**
   * Logout User
   */
  public logout(): void {
    this.afAuth.auth.signOut().then((res) => {
      //navigate to home
      this.router.navigate(['/']);
    })
  }

}
