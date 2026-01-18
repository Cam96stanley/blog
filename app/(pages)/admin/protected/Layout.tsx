"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { subscribeToAuthState } from "@/app/firebase/auth";

const ADMIN_EMAIL = "cam96stanley@gmail.com";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((user) => {
      if (user?.email === ADMIN_EMAIL) {
        setUserIsAdmin(true);
      } else {
        setUserIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!userIsAdmin) {
    router.replace("/admin/login");
    return null;
  }

  return <>{children}</>;
};

export default AdminLayout;
