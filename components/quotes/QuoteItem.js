import Link from "next/link";
import classes from "./QuoteItem.module.css";

const QuoteItem = props => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link href={`/${props.id}`} className={classes.btn}>
        View
      </Link>
    </li>
  );
};

export default QuoteItem;
