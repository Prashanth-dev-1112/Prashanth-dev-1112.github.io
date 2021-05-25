import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url = "http://localhost:8080/api/ingredients";
  data: any;
  errorMessage: string;
  constructor(private http: HttpClient) { }

  getData = () => {
    return this.http.get(this.api_url);
  }

  putData = (postData: any) => {
    const body = JSON.stringify(postData);
    this.http.post(this.api_url, {body}).subscribe((result) => console.log(result));
}
}
