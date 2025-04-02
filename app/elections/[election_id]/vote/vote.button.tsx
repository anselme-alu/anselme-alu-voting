"use client"

import { Button } from "@heroui/button"
import { vote } from "./actions";
import { addToast } from "@heroui/toast";
import { useUser } from "@clerk/nextjs";

export function VoteButton({
  election,
  candidate,
}: {
  election: number;
  candidate: number;
}) {
  const { user } = useUser()

  return (
    <Button color="success" onPress={async () => {
      await vote({
        election,
        candidate,
        voter: user?.id as string
      })

      addToast({
        title: "Vote submitted",
        description: "Your vote has been submitted successfully.",
        color: "success",
      })
    }}>
      Vote
    </Button>
  )
}
