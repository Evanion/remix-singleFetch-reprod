import { data } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const foo = await Promise.resolve('foo');
  return data({foo}, {headers: {'x-foo': 'bar'}});
}

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div>

      <pre>{JSON.stringify(loaderData, null, 2)}</pre>

    </div>
  );
}
