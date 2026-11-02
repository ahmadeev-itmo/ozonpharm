// Demo prototype for OZLAB-21: Реализовать подписку на новости
export function validateSubscription(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
