// import { useEffect } from "react";
// import QuoteList from "./QuoteList";
// import LoadingSpinner from "../UI/LoadingSpinner";
// import useHttp from "../../hooks/use-http";
// import { getAllQuotes } from "../../lib/api";
// import NoQuotesFound from "./NoQuotesFound";

const AllQuotes = () => {
  // const { sendRequest, status, data: loadedQuotes, error } = useHttp(
  //   getAllQuotes,
  //   true
  // );
  // useEffect(() => {
  //   sendRequest();
  // }, [sendRequest]);
  // //   loading
  // if (status === "pending")
  //   return (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // //error
  // if (error) return <p className="centered focused">{error}</p>;
  // //completed but no quotes
  // if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
  //   return <NoQuotesFound />;
  // //quotes list
  // return <QuoteList quotes={loadedQuotes} />;
  return <div></div>;
};

export default AllQuotes;
