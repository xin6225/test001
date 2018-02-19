import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalCacheService {
  private webStorage: Storage;
  public key = 'de-xintek-test001';

  constructor() {
    this.webStorage = window['localStorage'] as Storage;
  }

  observeDatas(datas: Observable<any[]>){
    this.observeData(datas, this.key);
  }

  get cachedData(): any[] {
    return this.getCachedData(this.key);
  }

  private observeData(data: Observable<any[]>, storageKey: string) {
    data.subscribe(
      (item) => {
        this.webStorage.setItem(storageKey, JSON.stringify(item));
      }
    );
  }

  private getCachedData(storageKey: string): any[] {
    const storedData = this.webStorage.getItem(storageKey);
    return storedData != null ? JSON.parse(storedData) : [];
  }
}
