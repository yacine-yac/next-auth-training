import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
export default async (req, res) => {
  const session = await getServerSession(req,res, authOptions)
  if (session) {
    res.send({
      content:
        "you are connected",session
    })
  } else {
    res.send({
      error: "You arn't connected",session
    })
  }
}