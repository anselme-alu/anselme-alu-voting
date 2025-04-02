import { supabase } from "@/packages/adapters/supabase/client"
import { Button } from "@heroui/button"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import Link from "next/link"

export default async function ElectionsPage() {
  const _elections = await supabase.from("elections").select("*")

  console.log({ _elections })

  if (_elections.error) {
    console.error(_elections.error)
    return <div>Error loading elections</div>
  }

  return (
    <div className="flex gap-3 py-10 container mx-auto">
      {_elections.data.map((election) => (
        <Card key={election.id} className="w-1/4">
          <CardHeader>
            <h2 className="text-xl font-bold">{election.title}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">{election.description}</p>
          </CardBody>
          <CardFooter className="gap-2">
            <Button as={Link} color="primary" href={`/elections/${election.id}/vote`}>Participate</Button>
            <Button as={Link} href={`/elections/${election.id}/apply`}>Apply</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
