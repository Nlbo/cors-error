import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../../shared/api/slider/slider.service';
import {IEventModel} from '../../../shared/interfaces/events.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slidesStore: IEventModel[] = [];
  details: IEventModel;
  showMore = false;
  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.sliderService.getAll().subscribe(({events}) => {
        events.forEach((event: IEventModel) => {
          this.slidesStore.push({
            ...event,
        });
      });
    });
  }

  more(slide: IEventModel): void {
    this.details = slide;
    this.showMore = true;
  }
  closeMore(): void {
    this.showMore = false;
  }
}
