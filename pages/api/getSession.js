import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    console.log("Session", JSON.stringify(session, null, 2));

    return res.status(200).json(session);
  } else {
    return res
      .status(401)
      .json({ error: { message: "Unauthorized" } });
  }
  res.end();
}
