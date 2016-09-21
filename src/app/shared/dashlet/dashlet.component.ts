import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashlet',
  templateUrl: './dashlet.component.html',
  styleUrls: ['dashlet.component.scss']
})
export class DashletComponent implements OnInit {
  title="abc";
  constructor() { }

  ngOnInit() {
  }

}
