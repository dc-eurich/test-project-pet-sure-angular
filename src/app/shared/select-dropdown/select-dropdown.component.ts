import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements OnInit {

  selectedItem: any;

  options = [
  ];

  config = {
    displayKey: 'name',
    search: true
    // height: 'auto',
    // placeholder: 'Select'
  };

  constructor() { }

  ngOnInit() {
  }

}
