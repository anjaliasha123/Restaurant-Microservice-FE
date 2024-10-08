import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL_Order } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private apiUrl = API_URL_Order + '/order/saveOrder'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  saveOrder(data: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, data);
  }
}
