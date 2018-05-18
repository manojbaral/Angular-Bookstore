import {Book} from "app/models/book";
import {ShoppingCart} from "app/models/shopping-cart";

export class CartItem {

  //Data Variables that hold cart items
  public id:number;
  public qty: number;
  public subtotal: number;
  public book: Book;
  public shoppingCart: ShoppingCart;
  public toUpdate: boolean;
}
