const FIREBASE_DOMAIN = "https://order-meal-a2f7a-default-rtdb.firebaseio.com";

// export async function getAllQuotes() {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quotes.");
//   }

//   const transformedQuotes = [];

//   for (const key in data) {
//     const quoteObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedQuotes.push(quoteObj);
//   }

//   return transformedQuotes;
// }

// export async function getSingleQuote(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quote.");
//   }

//   const loadedQuote = {
//     id: quoteId,
//     ...data,
//   };

//   return loadedQuote;
// }

export async function addQuote(quoteData) {
  const response = await fetch(`/api/add-quote`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Could not create quote. (${response.status}: ${response.statusText})`
    );
  }
  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`/api/add-comment`, {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Could not create comment. (${response.status}: ${response.statusText})`
    );
  }

  return null;
}

export async function getAllComments(quoteId) {
  const response = await fetch(`/api/get-comments/${quoteId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }
  return data.data;
}
