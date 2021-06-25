import { parse } from 'yaml';

export async function getYamlData(pageObject, path) {
  const url = `http://${pageObject.host}/${path}.yml`;
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


export function padNumber(num, max=50) {
  const paddedLength = Math.ceil(Math.log10(max+1));
  return num.toString().padStart(paddedLength, 0)
}