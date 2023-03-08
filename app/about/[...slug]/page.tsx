const delay = (time: any) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

const getData = async (slug: any) => {
  const post = await delay(5000);
  return slug;
};

export default async function Post({ params }: any) {
  const post = await getData(params);
  // throw new Error('Yikes!');

  return <div>About slug post</div>;
}
