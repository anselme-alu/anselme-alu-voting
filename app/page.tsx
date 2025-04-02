import { Button } from "@heroui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div>
        <h1 className="prose-headings:first-letter:text-gray-500 text-2xl font-bold">Welcome to Block chain based voting</h1>
        <div className="text-center py-10">
          <Button color="primary" as={Link} href="/elections">Connect wallet</Button>
        </div>
      </div>
    </div>
  );
}
