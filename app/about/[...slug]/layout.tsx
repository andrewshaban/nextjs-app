import { Suspense } from 'react';
import PostLoading from './loading';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>About slugs layout</div>
      <Suspense fallback={<PostLoading />}>
        <section>{children}</section>
      </Suspense>
    </div>
  );
}
