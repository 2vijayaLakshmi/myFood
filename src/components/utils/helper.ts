
export function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((e) =>
      e?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterData;
}
  