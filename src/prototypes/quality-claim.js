// Demo prototype for OZLAB-18: Реализовать форму претензии по качеству
export function validateClaim(claim) {
  return Boolean(claim.email && claim.product && claim.description);
}
