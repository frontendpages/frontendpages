import { headers } from "next/headers";
import { auth } from "@repo/auth/server";

export default async function ServerComponent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div>Not authenticated. auth in development</div>;
  }
  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  );
}
