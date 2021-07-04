import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-exchange-index',
  templateUrl: './insurance-exchange-index.component.html'
})
export class InsuranceExchangeIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
}
