// Demo prototype for OZLAB-20: Разработать интерфейс каталога новостей
export function newsCards(news) {
  return news.map(item => ({
    title: item.title,
    date: item.date,
    url: `/news/${item.id}`
  }));
}
