export interface IProduct {
  id: number;
  code?: string;
  name: string;
  pricePurchase: number;
  priceSale: number;
  stock: number;
  description?: string;
}
