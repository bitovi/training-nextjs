import type { NextApiRequest, NextApiResponse } from "next";

export default function requestHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fetch("https://swapi.dev/api/people/1").then(console.log);
}
