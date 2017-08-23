import Fuse from "fuse.js"
import memoized from "fast-memoize"

const DEFAULT_FUSE_OPTIONS = {
  threshold: 0.6
}

const getInstance = memoized((items, fuseOptions) => {
  const options = Object.assign({}, DEFAULT_FUSE_OPTIONS, fuseOptions)
  return new Fuse(items, options);
})

export function filterItems(items, query, fuseOptions={}) {
  const options = Object.assign({}, DEFAULT_FUSE_OPTIONS, fuseOptions)
  const fuse = getInstance(items, options);
  if (!query) {
    return [];
  }
  const results = fuse.search(query)
  return results
}

export default filterItems;
