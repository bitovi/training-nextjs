import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.revalidationSecret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  try {
    await res.revalidate("/about");

    return res.json({ revalidated: true });
  } catch (error) {
    // Just like before, if an error happens, the cached page remains
    return res.status(500).send("Revalidation error: " + error);
  }
}
