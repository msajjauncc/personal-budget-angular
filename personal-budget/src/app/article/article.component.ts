import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pb-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{
  
  ngOnInit(): void {
  }
  
  constructor() {}

  @Input() title = 'Title';
  @Input() content = 'Content';
}
