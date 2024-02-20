import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="colors " source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description " source="description" />
        <TextField label="discountedprice" source="discountedprice" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="title" source="title" />
        <TextField label="titlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="variants" source="variants" />
        <ReferenceManyField
          reference="Review"
          target="productId"
          label="reviews"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product "
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rating" source="rating" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
