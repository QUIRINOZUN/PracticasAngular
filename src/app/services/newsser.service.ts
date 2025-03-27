import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuirinewsService {

  constructor(private http: HttpClient) { }// Inject HttpClient
  getNews(catst: string){
    return this.http.get<QuirinewsService>('https://newsapi.org/v2/top-headlines?country=us&category=&{catst}&apiKey=3428d3da31c04ab5bd5d541bf5a848d7${catst}')// Get data from API
  }

}
