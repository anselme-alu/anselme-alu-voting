import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export function Header() {
  return (
    <div className="border-b bg-white p-10 flex justify-between items-center">
      <div>
        Block chain based Voting
      </div>
      <div className='gap-2 flex'>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}
