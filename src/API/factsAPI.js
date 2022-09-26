const baseURL = "https://catfact.ninja";

export const getFacts = async (limit = 10) => {
  let FACTS = [];
  let apis = [];
  for (let i = 1; i <= limit; i++) {
    apis.push(`${baseURL}/fact`);
  }
  try {
    const requests = apis.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const errors = responses.filter((response) => {
      console.log(response);
      return !response.ok;
    });
    if (errors.length > 0) {
      throw errors.map((response) => Error(response.statusText));
    }
    const json = responses.map((response) => response.json());
    const data = await Promise.all(json);
    data.forEach((datum) => FACTS.push(datum.fact));
  } catch (errors) {
    errors.forEach((error) => console.error(error));
  }
  return FACTS;
};
