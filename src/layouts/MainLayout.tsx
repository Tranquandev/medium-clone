import Header from "@/components/Header/Header";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { data: userData, isLoading } = useUser();
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header isLoading={isLoading} userData={userData} />
      <Outlet />
    </div>
  );
}
