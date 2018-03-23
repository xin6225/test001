import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeftnavResponse } from './leftnav.interfaces';

@Injectable()
export class LeftnavService {
  private sessionStorageKey = 'de-xintek-leftNavActive';

  constructor(private http: HttpClient) { }

  saveActiveNavItems(activeItem: { section: string; page: string }) {
    if (window.sessionStorage) {
      window.sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(activeItem));
    }
  }

  loadSavedActiveNavItems(): { section: string, page: string } {
    if (!window.sessionStorage) {
      return null;
    }

    return JSON.parse(window.sessionStorage.getItem(this.sessionStorageKey));
  }

  getNavigationItems(apiUrl: string) {
    return this.http.get<LeftnavResponse>(apiUrl);
  }
}
