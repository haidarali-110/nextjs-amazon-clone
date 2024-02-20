import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  categories?: CategoryUpdateManyWithoutProductsInput;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountedprice?: number;
  images?: InputJsonValue;
  orders?: OrderUpdateManyWithoutProductsInput;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  title?: string | null;
  titlePrice?: number | null;
  variants?: InputJsonValue;
};
