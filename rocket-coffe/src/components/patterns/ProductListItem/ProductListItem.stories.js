import React from "react";
import ProductListItem from "./ProductListItem";
import { action } from "@storybook/addon-actions";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

export default { title: "ProductListItem", decorators: [withKnobs] };

export const standard = () => {
    return <ProductListItem name={text("Name", "Standard Coffee")} price={text("Price", "2.50")} onAddToCart={action("Add to Cart Clicked")} imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")} />;
};

export const soldOut = () => {
    return <ProductListItem name={text("Name", "Standard Coffee")} price={text("Price", "2.50")} onAddToCart={action("Add to Cart Clicked")} imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")} isSoldOut />;
};

export const onSale = () => {
    return <ProductListItem name={text("Name", "Standard Coffee")} price={text("Price", "2.50")} onAddToCart={action("Add to Cart Clicked")} imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")} isOnSale={boolean("sale", true)} />;
};
