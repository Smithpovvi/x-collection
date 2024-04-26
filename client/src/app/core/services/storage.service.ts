import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private readonly storage: Storage) {
    this.init();
  }

  set(key: string, value: any): Observable<void> {
    return from(this._storage?.set(key, value));
  }

  get(key: string): Observable<string> {
    return from(this.storage.get(key));
  }

  remove(key: string): Observable<void> {
    return from(this.storage.remove(key));
  }

  private init(): void {
    from(this.storage.create())
      .pipe(take(1))
      .subscribe((store: Storage) => {
        this._storage = store;
      });
  }
}
