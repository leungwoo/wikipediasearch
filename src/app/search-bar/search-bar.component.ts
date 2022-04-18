import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public term = '';
  @Output() submitted = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
//to pass info from Child to Parent
//import Output and EventEmitter
//use generic typescript <type> and create an new instance to export
//call the instance and emit it in the method
//then go to the parernt component and add the event property to the selector
