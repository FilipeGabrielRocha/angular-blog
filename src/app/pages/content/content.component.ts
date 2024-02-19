import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: [
    './content.component.css',
    '../home/home.component.css'
  ]
})
export class ContentComponent implements OnInit {
  name:string =""
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  trailerGame:string = ""
  private id:string | null = "0"
  safeTrailerGameUrl: SafeResourceUrl = ""

  constructor(
    private route:ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.photoCover = result.photoCover
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.name = result.name
    this.trailerGame = result.trailerGame
    this.safeTrailerGameUrl = this.getSafeVideoUrl(this.trailerGame)

    console.log(this.trailerGame);
    console.log(this.safeTrailerGameUrl);

  }

  getSafeVideoUrl(videoId: string): SafeResourceUrl {
    const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }



}
