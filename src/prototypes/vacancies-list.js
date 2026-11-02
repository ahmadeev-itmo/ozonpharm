// Demo prototype for OZLAB-23: Разработать интерфейс каталога вакансий
export function vacancyLinks(vacancies) {
  return vacancies.map(v => ({ title: v.title, href: `/jobs/${v.id}` }));
}
