// Demo prototype for OZLAB-28: Реализовать серверную обработку откликов
export function acceptApplication(data) {
  if (!data.vacancyId || !data.email) throw new Error('Invalid application');
  return { ...data, status: 'new' };
}
