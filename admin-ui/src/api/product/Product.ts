import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  categories?: Array<Category>;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedprice: number;
  id: string;
  images: JsonValue;
  orders?: Array<Order>;
  reviews?: Array<Review>;
  title: string | null;
  titlePrice: number | null;
  updatedAt: Date;
  variants: JsonValue;
};
