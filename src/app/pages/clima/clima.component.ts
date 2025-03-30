import { Component, OnInit } from '@angular/core';
import { ClimaResult } from '../../interfaces/climaint';
import { ApiClima } from '../../services/climaser.service';

@Component({
  selector: 'app-clima',
  standalone: false,
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent implements OnInit {
location: string = 'Guadalupe Victoria Durango'; // Default location

  clima!: ClimaResult;
  
  constructor(private service: ApiClima) { }
  
  ngOnInit(): void {
    this.service.getData(this.location).subscribe((result: ClimaResult) => {
      this.clima = result;
    });
  }

  getWeatherIcon(weatherCode: number, isDay: string): string {
    const isDayTime = isDay === 'yes';
    
    // Basado en los códigos de clima de WeatherStack API
    switch(weatherCode) {
      case 113: // Clear
        return isDayTime ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      case 116: // Partly cloudy
        return isDayTime ? '<i class="fas fa-cloud-sun"></i>' : '<i class="fas fa-cloud-moon"></i>';
      case 119: // Cloudy
      case 122: // Overcast
        return '<i class="fas fa-cloud"></i>';
      case 143: // Fog
      case 248:
      case 260:
        return '<i class="fas fa-smog"></i>';
      case 176: // Patchy rain
      case 263:
      case 266:
      case 293:
      case 296:
      case 299:
      case 302:
      case 305:
      case 308:
        return '<i class="fas fa-cloud-rain"></i>';
      case 179: // Patchy snow
      case 227:
      case 230:
        return '<i class="fas fa-snowflake"></i>';
      case 182: // Patchy sleet
      case 281:
      case 284:
        return '<i class="fas fa-cloud-meatball"></i>';
      case 200: // Thundery outbreaks
      case 386:
      case 389:
        return '<i class="fas fa-bolt"></i>';
      case 185: // Freezing drizzle
      case 281:
        return '<i class="fas fa-icicles"></i>';
      case 293: // Light rain
        return '<i class="fas fa-cloud-showers-heavy"></i>';
      case 356: // Heavy rain
        return '<i class="fas fa-umbrella"></i>';
      default:
        return isDayTime ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
  }
}



