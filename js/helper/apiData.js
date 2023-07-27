export default async function apiData(url) {
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return [result, null];
  } catch (error) {
    // jei yra klaida
    console.warn('klaida apiData fn', error);
    return [null, error];
  }
}
