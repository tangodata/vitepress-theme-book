/* taxoutils.js --
taxonomy functions,
tags,
year,
*/


/*
type Post = {
  frontMatter: {
    date?: string;
    title?: string;
    tags?: string[];
    description?: string;
  };
  regularPath: string;
};
*/

export function initTags(posts /*: Post[]*/) {
  const data: any = {};
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    const tags = element.frontMatter.tags;

    if (Array.isArray(tags)) {
      tags.forEach((item) => {
        if (!data[item]) {
          data[item] = [];
        }
        data[item].push(element);
      });
    }
  }
  return data;
}

export function useYearSort(posts /*: Post[]*/) {
  const data = [];
  let year = "0";
  let num = -1;
  for (let index = 0; index < posts.length; index++) {
    const element = posts[index];
    if (element.frontMatter.date) {
      const y = element.frontMatter.date.split("-")[0];
      if (y === year) {
        data[num].push(element);
      } else {
        num++;
        data[num] = [] /*as any*/;
        data[num].push(element);
        year = y;
      }
    }
  }
  return data;
}
