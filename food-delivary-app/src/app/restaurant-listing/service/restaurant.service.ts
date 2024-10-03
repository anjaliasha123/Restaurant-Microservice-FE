import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from 'src/app/constants/url';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = API_URL_RL + '/restaurant/fetchAllRestaurants'

  constructor(private http: HttpClient) { }

  private handleError = (err: any)=>{
    console.log('An error occured: ',err);
    return throwError(err.message || err);
  }
  
  getAllRestaurants(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`)
    .pipe(catchError(this.handleError));
  }
  
  
}
