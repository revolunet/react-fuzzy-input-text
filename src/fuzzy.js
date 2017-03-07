function match(country, query, startsWith) {
  // naive text search
  if (!query) {
    return true;
  }
  let re = new RegExp(`^${query}.*`, "i");
  if (!startsWith) {
    re = new RegExp(`^[^${query.charAt(0)}].*${query}.*`, "i");
  }
  return country.match(re);
}

function filterItems(items, query) {
  if (!query) {
    return [];
  }
  // match at beginning
  const results1 = items.filter(item => match(item, query, true));
  results1.sort();
  // match elsewhere
  const results2 = items.filter(item => match(item, query, false));
  results2.sort();
  // return combined results
  return results1.concat(results2);
}

export default filterItems;
