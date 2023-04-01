import { Company } from '../portfolio/_companies';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('company') company: Company = {
    description: '',
    imagePath: '',
    name: '',
    stack: [],
    website: '',
  };

  goTo(url: string) {
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit(): void {}
}
