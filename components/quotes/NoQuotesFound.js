import Link from "next/link";
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>

      <Link className="btn" href="/new-quote">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
