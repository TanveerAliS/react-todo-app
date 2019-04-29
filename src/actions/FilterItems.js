export const FILTER_ITEMS = 'Filter Items';

export const FilterItems = (filterName) => ({
  type: FILTER_ITEMS,
  payload: filterName,
});
