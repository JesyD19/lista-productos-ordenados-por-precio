import productsList from "./products.json" with { type: "json"}

export function getProductSortedByPrice() {
  const productsListSorted = productsList.sort((a, b) => {
    return a.price - b.price
  })
  return productsListSorted;
}