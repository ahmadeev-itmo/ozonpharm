// Demo prototype for OZLAB-27: Разработать форму отклика на вакансию
export function validateApplication(data) {
  return Boolean(data.name?.trim() && data.email?.includes('@') && data.resume);
}
