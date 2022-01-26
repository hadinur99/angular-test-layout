import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent implements OnInit {

  @Input('title')
  title!: string;

  @Input('subtitle')
  subtitle!: string;

  @Input('imgUrl')
  imgUrl!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
