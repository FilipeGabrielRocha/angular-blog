import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  descriptionPhoto:string = "Fevereiro 19, 2024"
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
