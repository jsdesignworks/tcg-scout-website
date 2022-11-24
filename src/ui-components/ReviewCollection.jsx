/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Review } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ReviewCard from "./ReviewCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ReviewCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.reviewdate(SortDirection.ASCENDING),
  };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Review,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={14}
      direction="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ReviewCollection")}
    >
      {(item, index) => (
        <ReviewCard
          review={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ReviewCard>
      )}
    </Collection>
  );
}
