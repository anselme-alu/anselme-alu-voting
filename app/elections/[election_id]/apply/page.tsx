"use client"

import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import { submitApplication } from "./actions";
import { addToast } from "@heroui/toast";
import { useUser } from "@clerk/nextjs";

export default function ApplyForElection({ params }: { params: Promise<{ election_id: number }> }) {
  const user = useUser();

  const [fullName, setFullName] = useState("");
  const [mandate, setMandate] = useState("");

  async function submit() {
    try {
      const data = {
        fullName,
        mandate,
        election: (await params).election_id,
        user: user.user?.id as string,
      }

      await submitApplication(data);

      addToast({
        title: "Application submitted",
        description: "Your application has been submitted successfully.",
        color: "success",
      })
    } catch (error) {
      addToast({
        title: "Error",
        description: (error as Error).message,
        color: "danger",
      })
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">Apply for this election</h1>
        </CardHeader>
        <CardBody className="gap-6">
          <Input className="max-w-5xl" label="Full name" type="text" required={true} value={fullName} onValueChange={setFullName} />
          <Textarea className="max-w-5xl" label="Mandate" placeholder="Enter your mandate" required={true} value={mandate} onValueChange={setMandate} />
        </CardBody>
        <CardFooter>
          <Button color="primary" onPress={submit}>Apply</Button>
        </CardFooter>
      </Card>
    </div>
  )
}