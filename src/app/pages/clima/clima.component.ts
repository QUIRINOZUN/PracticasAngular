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
  clima!: ClimaResult;
  
  constructor(private service: ApiClima) { }
  
  ngOnInit(): void {
    this.service.getData("").subscribe((result: ClimaResult) => {
      this.clima = result;
    });
  }
}
