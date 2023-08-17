import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import NavBar from "../components/navBar";
import Loading from "../loading";

export default async function AdminsPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admins");
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full flex h-fit shadow bg-gray-200 flex-col items-center justify-center rounded-md">
          <h1 className="text-4xl font-bold">Admins</h1>
          <p>You're {session.user.name}, so you have access</p>
          <div className="w-full flex items-center justify-center">
            <div className=""></div>

            {/* Additional content for admin users only*/}
            {session.user.role === "superadmin" && (
              <div className="bg-blue-100 p-4 rounded-md mt-4">
                <p>You're a Superadmin! Here's some extra content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
