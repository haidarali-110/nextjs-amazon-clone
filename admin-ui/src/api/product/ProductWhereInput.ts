import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  categories?: CategoryListRelationFilter;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedprice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  title?: StringNullableFilter;
  titlePrice?: FloatNullableFilter;
  variants?: JsonFilter;
};
