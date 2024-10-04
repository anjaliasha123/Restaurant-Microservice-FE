import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_FC } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private apiUrl = API_URL_FC + '/foodCatalogue/fetchRestaurantAndFoodItemsById/';

  constructor(private http: HttpClient) { }

  getFoodItemsByRestaurant(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl+id}`)
    .pipe(catchError(this.handleError));
  }
  private handleError = (err: any)=>{
    console.log('An error occured: ',err);
    return throwError(err.message || err);
  }
}
