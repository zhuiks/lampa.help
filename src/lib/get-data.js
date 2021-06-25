import { parse } from 'yaml';

export async function getYamlData(path, {page, fetch}) {
  const url = `http://${page.host}/${path}.yml`;
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

export function getLessonFilename(sectionKey, lessonNumber) {
  return `${sectionKey.toLowerCase().replace('_', '-')}-${padNumber(lessonNumber)}`;
}