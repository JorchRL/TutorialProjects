import React from "react";

const Card = ({ children, highlight }) => {
    const cardClassName = highlight ? "card sale" : "card";
    return <div className={cardClassName}>{children}</div>;
};

export default Card;
