import Header from "@/components/Header/Header";
import { useUser } from "@/hooks/useUser";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { data: userData, isLoading } = useUser();
  return (
    <div>
      <Header isLoading={isLoading} userData={userData} />
      <Outlet />
    </div>
  );
}
