// Demo prototype for OZLAB-35: Исправить ошибку при загрузке резюме неверного формата
export function validateResume(file) {
  if (!file || !['application/pdf'].includes(file.type)) {
    return {
      valid: false,
      error: 'Загрузите резюме в формате PDF'
    };
  }
  return { valid: true, error: null };
}
