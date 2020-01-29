import { Injectable } from "@angular/core";

@Injectable()

export class WindowService {

  get windowReference() {
    return window;
  }

}
