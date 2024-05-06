import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filial',
  standalone: true,
  imports: [],
  templateUrl: './filial.component.html',
  styleUrl: './filial.component.css',
})
export class FilialComponent implements OnInit {
  constructor() {}

  @Input() logo!: string;
  @Input() estado!: string;
  @Input() url!: string;
  ngOnInit(): void {}
}
