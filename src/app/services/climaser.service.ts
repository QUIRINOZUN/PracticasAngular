import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClimaResult } from '../interfaces/climaint';


@Injectable({
  providedIn: 'root'
})
export class ApiClima {
  constructor(private http: HttpClient) { }// Inject HttpClient
  getData(location: string){
    return this.http.get<ClimaResult>('https://api.weatherstack.com/current?access_key=ff3dbbd040c06028f2fd35ee986d5fdc&query=${location}')// Get data from API
  }





  // private urlApi = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apiKey}';

  // constructor(private http: HttpClient) { }// Inject HttpClient
  // public getData(){
  //   return this.http.get(this.urlApi);// Get data from API
  // }
}
