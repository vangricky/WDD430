import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindRefService {
  getNativeWindow() {
    return window;
  }
}
