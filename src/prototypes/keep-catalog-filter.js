// Demo prototype for OZLAB-34: Исправить сброс фильтра ЖНВЛП при пагинации
export function nextCatalogPage(filters, page) {
  return { ...filters, page };
}
