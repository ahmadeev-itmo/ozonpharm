// Demo prototype for OZLAB-8: Разработать форму сообщения о нежелательной реакции
export function validateReaction(data) {
  return ['product', 'patient', 'reaction']
    .filter(key => !String(data[key] ?? '').trim());
}
