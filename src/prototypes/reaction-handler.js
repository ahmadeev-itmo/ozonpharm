// Demo prototype for OZLAB-11: Реализовать серверную обработку сообщений о реакции
export function acceptReaction(data) {
  if (!data.product || !data.reaction) throw new Error('Missing required fields');
  return { ...data, status: 'received' };
}
