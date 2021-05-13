import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // Tell Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // If
      // there are items
      // AND there aren't enough items to satisfy howmany were requested
      // AND we are on the last page
      // then just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      // If there are items return them from cache and we don't have to fetch them
      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache! Gonna send them to Apollo!`
        // );
        return items;
      }

      return false;
    },
    // First thing it does is ask the read function for those items

    // we can either do one of two things
    // 1. return items because they are already in cache
    // 2. return false from here (network request instead to fetch the data)
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // This runs when the Apollo Client comes back from the network request with our products
      // what to do with this data?
      // console.log(`Merging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      // console.log(merged);
      // finally return merged items from the cache
      return merged;
    },
  };
}
