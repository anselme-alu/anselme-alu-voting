import { supabase } from "@/packages/adapters/supabase/client"
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card"
import { VoteButton } from "./vote.button"

export default async function VotePage({ params }: { params: Promise<{ election_id: number }> }) {
  const _election = await supabase.from("elections").select("*").eq("id", (await params).election_id).single()
  const _candidates = await supabase.from("candidates").select("*").eq("election", (await params).election_id)

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-bold">{_election.data?.title}</h1>
        </CardHeader>
        <CardBody>
          <p>{_election.data?.description}</p>
        </CardBody>
      </Card>
      <div className="py-10">
        <hr />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Candidates</h2>
        <div className="py-5 flex gap-10">
          {_candidates.data?.map((candidate) => (
            <Card key={candidate.id} className="mb-5">
              <CardHeader>
                <h3 className="text-xl font-bold">{candidate.full_name}</h3>
              </CardHeader>
              <CardBody>
                <p>{candidate.mandate}</p>
              </CardBody>
              <CardFooter>
                <VoteButton candidate={candidate.id} election={_election.data?.id as number} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
