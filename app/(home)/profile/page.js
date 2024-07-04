import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
  return (
    <div className="h-screen flex items-center justify-center text-2xl">welcome, <span className="text-green-500">{session?.user?.name}</span></div>
  )
}