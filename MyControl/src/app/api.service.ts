import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const hdr = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:8100')
  .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  .set('Access-Control-Allow-Headers', 'Origin, Content-Type');


const option = {
  headers: hdr
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    //  this.initApp()
  }

  // async initApp(){
  //   let link='https://docs.google.com/document/d/1rULX3-OZABXiuchv4TDjpik7ghI0PXkyyizgBVnYiEk/edit?usp=sharing'
  //   let data=await fetch(link);
  //   let url =await data.text();
  //   console.log(url)
  // }

  buttonCall(params: any): Observable<any> {
    return this.http.post(environment.url, params, option).pipe(map(response => response))
  }

}
