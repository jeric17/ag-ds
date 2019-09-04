export function cx(obj: {[k: string]: boolean}) {
  const keys = Object.keys(obj);
  const filtered = keys.filter(d => obj[d]).join(' ');

  return filtered;
}
