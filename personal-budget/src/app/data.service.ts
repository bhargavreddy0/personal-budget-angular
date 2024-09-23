import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private data: any = null; // Holds data fetched from backend

  constructor(private http: HttpClient) {}

  // Method to fetch data from backend if not already cached
  fetchData(): Observable<any> {
    if (this.data) {
      // If data already exists, return it without making another HTTP call
      return of(this.data);
    }

    // Make HTTP call if data is null/empty
    return this.http.get('http://localhost:3000/budget').pipe(
      tap((res) => (this.data = res)) // Save data to the service variable
    );
  }

// Method to get the current cached data
  getData(): any {
    return this.data;
  }
}