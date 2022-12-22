import { FC, useState } from "react";

interface CardProps {
  url: string;
  id: string;
  author: string;
  detail?: string;
}

const Card: FC<CardProps> = (props) => {
  return (
    <article className="h-64 rounded-md">
      <picture className="h-4/5 w-full">
        <img src={props.url} alt={props.detail || "Imagen Generica"} />
      </picture>
      <p className="flex justify-between">
        <span className="">{props.author}</span>
        <span className="">#{props.id}</span>
      </p>
    </article>
  );
};

export default Card;
