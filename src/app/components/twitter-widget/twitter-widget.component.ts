import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-widget',
  standalone: true,
  imports: [],
  templateUrl: './twitter-widget.component.html',
  styleUrl: './twitter-widget.component.css',
})
export class TwitterWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
