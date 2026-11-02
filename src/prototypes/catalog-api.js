// Demo prototype for OZLAB-9: Реализовать API каталога препаратов
export function listProducts(products, offset = 0, limit = 20) {
  return { total: products.length, items: products.slice(offset, offset + limit) };
}
