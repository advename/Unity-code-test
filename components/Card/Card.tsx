import React from "react";
import { Card as BSCard, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./Card.module.scss";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  content: string;
  gotoText: string;
  gotoPage: string;
}

function Card({
  title,
  content,
  gotoText,
  gotoPage,
  className,
  ...rest
}: CardProps) {
  return (
    <BSCard
      style={{ width: "18rem" }}
      className={`${className || ""}`}
      {...rest}
    >
      <BSCard.Body>
        <BSCard.Title>{title}</BSCard.Title>
        <BSCard.Text>{content}</BSCard.Text>
        <Link href={gotoPage}>
          <a>{gotoText}</a>
        </Link>
      </BSCard.Body>
    </BSCard>
  );
}

export { Card };
