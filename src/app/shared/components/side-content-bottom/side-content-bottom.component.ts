import { Component, OnInit } from '@angular/core';
import { SideContentService } from 'src/app/services/side-content.service';

export class Channels {
  title!: string;
  imageUrl!: string;
}

@Component({
  selector: 'app-side-content-bottom',
  templateUrl: './side-content-bottom.component.html',
  styleUrls: ['./side-content-bottom.component.css']
})
export class SideContentBottomComponent implements OnInit {

  channels: Array<Channels> = [];

  constructor(
    private service: SideContentService
  ) { }

  ngOnInit(): void {
    this.service.getPostSideContentBottom().subscribe((data:any) => {
      data.slice(0,3).map((res:any) => {
        console.log(res)
        const channel: Channels = new Channels();
        channel.title = res?.title;
        channel.imageUrl = res?.thumbnailUrl

        this.channels.push(channel)
      })
    })
  }

}
