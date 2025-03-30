import { Component, OnInit } from '@angular/core';  
import { QuirinewsService } from '../../services/newsser.service';
import { ArticleResult } from '../../interfaces/newsint';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
[x: string]: any;
  articles!: ArticleResult;
  constructor (private service: QuirinewsService) {}
  cat:string = 'technology';
  opciones =[
    {valor: 'technology', nombre: 'Tecnology'},
    {valor: 'sports', nombre: 'Sports'},
    {valor: 'sience', nombre: 'Sience'},
    {valor: 'general', nombre: 'General'},
    {valor: 'health', nombre: 'Health'},
    {valor: 'busniess', nombre: 'Busniess'}
  ]

  ngOnInit(): void {
    this.cargarNew();
  }
  cargarNew(): void{
    this.service.getNews(this.cat).subscribe((result: ArticleResult) => {
      this.articles = result;
    });
  }
}
