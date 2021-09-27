import React from "react";
import "./ProductListItem.css";
import { Button, Card, Heading, Text } from "../../index";

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) => {
    return (
        <Card highlight={isOnSale}>
            <Heading>
                {name} {isOnSale && "(On Sale)"}
            </Heading>
            <img src={imageUrl} alt='' />
            <Text>{price}</Text>
            <Button onclick={onAddToCart} disabled={isSoldOut}>
                {isSoldOut ? "Sold Out" : "Add to Cart"}
            </Button>
        </Card>
    );
};

export default ProductListItem;
