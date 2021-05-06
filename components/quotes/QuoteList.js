// import { useHistory, useLocation } from "react-router";
import { useRouter } from "next/router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id < quoteB.id ? 1 : -1;
    } else {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const router = useRouter();
  const isSortAscending = router.query.sort
    ? router.query.sort === "asc"
    : true;
  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);
  const changeSortingHandler = () => {
    router.push(`/?sort=${isSortAscending ? "desc" : "asc"}`, undefined, {
      shallow: true,
    });
  };
  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
