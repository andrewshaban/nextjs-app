import Link from 'next/link';

const delay = (time: any) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

const getData = async (slug: any) => {
  const post = await delay(5000);
  return slug;
};

type Props = {};

async function Contact({}: Props) {
  const post = await getData('any');
  return (
    <div>
      <h1>Contact</h1>
      <Link href={'/'}>Home</Link>
    </div>
  );
}

export default Contact;
