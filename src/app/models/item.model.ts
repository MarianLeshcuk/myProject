export class Item {
    id: string;
    title: string;
    description: string;
    prise: number;
    imageSrc: string;

    constructor(title, description, prise, imageSrc) {
         this.title = title;
         this.description = description;
         this.prise =prise;
         this.imageSrc = imageSrc;
    }

}