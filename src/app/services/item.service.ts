import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemService {

        items: Item[] = [
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png")
        ]

        getAllItems() {
            return this.items;
        }
}