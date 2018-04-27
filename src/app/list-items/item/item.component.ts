import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  openDetails() {
    console.log(this.item);
    this.itemService.getItemById(this.item._id).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
