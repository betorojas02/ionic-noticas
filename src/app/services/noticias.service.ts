import { environment } from './../../environments/environment';
import { RespuestaTopHeadlines } from './../interfaces/interfaces';
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


const apiKey = environment.apiKey;

const apiUrl = environment.apiUrl;


const headers = new HttpHeaders({
  'x-Api-Key':apiKey
});

@Injectable({
  providedIn: "root"
})
export class NoticiasService {
  constructor(private http: HttpClient) {}


  private ejecutarQuery<T>(query:string){

    let url = apiUrl + query;
 
    return this.http.get<T>(url, {headers});
  }

  getTopHeadLines() {

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=co`);

  }


  getTopHeadLinesCategoria(categoria:string){
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=co&category=${ categoria }`);
  } 
  
}
