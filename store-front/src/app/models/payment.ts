import {BillingAddress} from "app/models/billing-address";

export class Payment {

  //Data Variables that hold Payment Information
  public id: number;
  public type: string;
  public cardNumber: string;
  public expiryMonth: string;
  public expiryYear: string;
  public cvc: number;
  public holderName: string;
  public defaultPayment: boolean;
  public billingAddress: BillingAddress;
}
