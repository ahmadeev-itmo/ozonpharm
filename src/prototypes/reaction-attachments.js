// Demo prototype for OZLAB-12: Реализовать вложения к сообщениям о реакции
export function validateAttachment(file) {
  const allowed = new Set(['image/png', 'image/jpeg', 'application/pdf']);
  return allowed.has(file.type) && file.size <= 5 * 1024 * 1024;
}
