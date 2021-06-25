import { parse } from 'yaml';

export async function getYamlData(url) {
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.text();

    return {
      ok: res.ok,
      data: parse(data) 
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
