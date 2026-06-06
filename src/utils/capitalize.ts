export function capitalize(palavra: string) {
  if (!palavra) return palavra;

  return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
}
