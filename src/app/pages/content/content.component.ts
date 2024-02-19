import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    '../home/home.component.css'
  ]
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
