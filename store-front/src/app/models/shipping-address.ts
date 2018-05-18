import {Order} from "app/models/order";

export class ShippingAddress {

  //Data variables that hold Shipping Address information
  public id:number;
  public shippingAddressName:string;
  public shippingAddressStreet1:string;
  public shippingAddressStreet2:string;
  public shippingAddressCity:string;
  public shippingAddressState:string;
  public shippingAddressCountry:string;
  public shippingAddressZipcode:string;
  public order:Order;
}
