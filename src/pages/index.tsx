import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import { useEffect } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  // Move the console.log statement inside a useEffect hook
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <br />
            {!user.isSignedIn && <SignInButton />}
            {!!user.isSignedIn && <SignOutButton />}
          </h1>

          <div>
            {data?.map((post) => (
              <div key={post.id}>
                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                  {post.content}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
