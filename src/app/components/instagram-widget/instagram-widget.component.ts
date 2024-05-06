import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-widget',
  standalone: true,
  imports: [],
  templateUrl: './instagram-widget.component.html',
  styleUrl: './instagram-widget.component.css',
})
export class InstagramWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    (<any>window).instgrm.Embeds.process();
  }
}
