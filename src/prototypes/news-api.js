// Demo prototype for OZLAB-19: Реализовать API поиска и списка новостей
export function searchNews(news, text = '') {
  return news.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
}
