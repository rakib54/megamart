import { auth } from "@/auth";
import ChangePassword from "@/components/profile/ChangePassword";
import PersonalDetails from "@/components/profile/PersonalDetails";
import { getUser } from "@/database/queries/auth";

export default async function ProfilePage() {
  const session = await auth();
  const userInfo = await getUser(session?.user?.email);
  return (
    <>
      <PersonalDetails userInfo={userInfo} />
      <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <ChangePassword email={userInfo?.email} />
        </div>
      </div>
    </>
  )
}