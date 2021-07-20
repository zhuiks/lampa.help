import { parse } from 'yaml';


export async function setPlanData(fetch) {
  var planData = { ready: true };


  for (const plan of ['2year', '4year']) {

    const filePath = `en-${plan}/`;
    const resAbout = await getYamlData(fetch, `${filePath}about`);

    if (!resAbout.ok) {
      planData.ready = false;
      return resAbout;
    }

    planData[plan] = {
      name: resAbout.data['Name'],
      desc: resAbout.data['Description'],
      sections: resAbout.data['Sections'],
      urlPath: `${plan}-plan/`,
      filePath,
    }

  }

  return planData;
}

export async function getYamlData(fetch, path) {
  const url = `/lessons/${path}.yml`;
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


export function padNumber(num, max = 50) {
  const paddedLength = Math.ceil(Math.log10(max + 1));
  return num.toString().padStart(paddedLength, 0)
}

export function getLessonFilename(sectionKey, lessonNumber) {
  return `${sectionKey.toLowerCase().replace('_', '-')}-${padNumber(lessonNumber)}`;
}