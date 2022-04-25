import { Component } from '@angular/core';
import { Search } from './interfaces/wikipediaresponse';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pages: Search[] = [];

  constructor(private wikipedia: WikipediaService) {}
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
      console.log(pages);
    });
  }
}
