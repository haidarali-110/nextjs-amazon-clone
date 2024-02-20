import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  colors: InputJsonValue;
  description: InputJsonValue;
  discountedprice: number;
  images: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  title?: string | null;
  titlePrice?: number | null;
  variants: InputJsonValue;
};
