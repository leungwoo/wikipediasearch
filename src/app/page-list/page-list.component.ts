import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../interfaces/wikipediaresponse';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: Search[] = [];

  constructor() {}

  ngOnInit(): void {}
}
