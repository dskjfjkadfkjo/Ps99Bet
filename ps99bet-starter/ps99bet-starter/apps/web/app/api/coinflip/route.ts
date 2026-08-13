let matches = [
  { id: '1', value: 1000000, player: 'Kxqzi' }
];

export async function GET() {
  return Response.json(matches);
}

export async function POST(request: Request) {
  const body = await request.json();
  const match = {
    id: crypto.randomUUID(),
    value: Number(body.value || 0),
    player: body.player || 'Guest'
  };
  matches.unshift(match);
  return Response.json(match);
}
