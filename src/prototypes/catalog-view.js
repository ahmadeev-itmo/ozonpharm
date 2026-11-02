// Demo prototype for OZLAB-13: Разработать интерфейс каталога препаратов
export function catalogCards(products) {
  return products.map(({ id, name }) => ({
    key: id,
    label: name,
    href: `/products/${id}`
  }));
}
