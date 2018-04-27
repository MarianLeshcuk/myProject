import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { Http , Headers} from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ItemService {

    endpoints:any = environment.local;
    constructor(private http: Http) {

    }

    addHeaders(headers: Headers) {
        headers.append("Access-Controll-Allow-Origin", "*")
    }

        items: Item[] = [
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png"),
            new Item("Title", "Desc", 300, "https://d1yupijb0jmhpf.cloudfront.net/72ef796c-ef3c-4067-adef-f10549d5707c.png")
        ]

        getAllItems() {
            let headers = new Headers({});
            this.addHeaders(headers);
            return this.http.get(this.endpoints.allItems, {headers});
        }

        getItemById(id) {
            let headers = new Headers({});
            this.addHeaders(headers);
            return this.http.get(this.endpoints.getById+id, {headers: headers});
        }

        // getAllItems() {
        //     return this.items;
        // }
}