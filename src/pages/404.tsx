import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404(): null {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
