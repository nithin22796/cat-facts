
const baseURL = "https://catfact.ninja";


export const getFacts = async (limit = 10) => {
  let FACTS = [];
  for (let i = 1; i <= limit; i++) {
    await fetch(`${baseURL}/fact`).then(res => res.json()).then((data) => FACTS.push(data.fact));
  }
  console.log(FACTS);
  return FACTS;
}