export async function GET(request: Request) {
  const obj = {
    data: {
      me: true,
    },
  };
  return new Response(JSON.stringify(obj));
}
