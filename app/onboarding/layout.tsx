import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user has already completed onboarding
  const { sessionClaims } = await auth();

  if (
    sessionClaims?.metadata?.onboardingComplete === true ||
    sessionClaims?.public_metadata?.onboardingComplete === true
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
           <h2 className="text-2xl font-bold">You are already all set!</h2>
           <p>It looks like you have already completed onboarding.</p>
           <a href="/dashboard" className="text-blue-600 hover:underline">Go to Dashboard</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {children}
      </div>
    </div>
  );
}

