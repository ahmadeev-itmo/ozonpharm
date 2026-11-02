// Demo prototype for OZLAB-10: Реализовать API карточки препарата
export function findProduct(products, id) {
  return products.find(product => String(product.id) === String(id)) ?? null;
}
