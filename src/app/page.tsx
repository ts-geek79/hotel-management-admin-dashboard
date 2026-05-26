import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  redirect("/login");
};

export default HomePage;
