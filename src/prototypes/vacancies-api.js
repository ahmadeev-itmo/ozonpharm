// Demo prototype for OZLAB-22: Реализовать API каталога вакансий
export function filterVacancies(vacancies, city) {
  return vacancies.filter(vacancy => !city || vacancy.city === city);
}
