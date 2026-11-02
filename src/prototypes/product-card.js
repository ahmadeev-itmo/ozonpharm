// Demo prototype for OZLAB-15: Разработать страницу карточки препарата
export function productCard(product) {
  return {
    title: product.name,
    dosage: product.dosage,
    instruction: product.instructionUrl
  };
}
