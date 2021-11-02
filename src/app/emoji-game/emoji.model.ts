export class EmojiModel {
    public id:number
    public imgUrl:string
  public checked: boolean;

  constructor( id: number,imgUrl: string, checked: boolean,) {
    this.imgUrl = imgUrl;
    this.id = id;
    this.checked = checked;
    
  }
}