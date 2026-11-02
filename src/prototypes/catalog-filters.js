// Demo prototype for OZLAB-14: Добавить поиск, фильтры и пагинацию препаратов
export function filterProducts(products, query = '', page = 1, size = 10) {
  const matched = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  return {
    total: matched.length,
    items: matched.slice((page - 1) * size, page * size)
  };
}
