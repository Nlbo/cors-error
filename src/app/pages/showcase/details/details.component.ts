import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {IEventModel} from "../../../shared/interfaces/events.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() details: IEventModel;
  @Output() closeMore = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  handleCancel(): void {
    this.closeMore.emit();
  }


}
