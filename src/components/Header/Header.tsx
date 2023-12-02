import { TUser } from "@/@type/user";
import { useLogout } from "@/hooks/useAuth";
import { useState } from "react";
import { Else, If, Then } from "react-if";
import { Link, useLocation } from "react-router-dom";
type HeaderProps = {
  isLoading?: boolean;
  userData?: TUser | null;
};
export default function Header({ isLoading, userData }: HeaderProps) {
  const { pathname } = useLocation();
  const [isShow, setIsShow] = useState(false);
  const onSignOut = useLogout();
  const handleLogout = () => {
    onSignOut();
  };
  return (
    <div className="px-4 shadow-md border-b-1">
      <div className="flex justify-between py-4 max-w-[1920px] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold">
            <span className="text-green-500">M</span>
            edium
          </Link>
        </div>
        {pathname !== "/login" && pathname !== "/register" ? (
          <If condition={isLoading}>
            <Then>
              <span className="w-[63px] h-[38px] rounded-xl is-loading"></span>
            </Then>
            <Else>
              {userData ? (
                <div
                  className="relative p-2 text-sm font-medium transition-all border border-gray-400 cursor-pointer rounded-xl hover:bg-gray-200"
                  onMouseEnter={() => setIsShow(true)}
                  onMouseLeave={() => setIsShow(false)}
                >
                  {userData.username}
                  {isShow && (
                    <div className="absolute top-[100%] right-0 min-w-[200px] p-2 shadow-md border-1 rounded-md bg-white">
                      <div className="px-4 py-2 transition-all rounded-md hover:bg-gray-300">
                        Thông tin
                      </div>
                      <div
                        className="px-4 py-2 transition-all rounded-md hover:bg-gray-300"
                        onClick={handleLogout}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="p-2 text-sm font-medium transition-all border border-gray-400 rounded-xl hover:bg-gray-200"
                >
                  Đăng nhập
                </Link>
              )}
            </Else>
          </If>
        ) : null}
      </div>
    </div>
  );
}

// {
//   !(pathname === "/login" || pathname === "/register") && isLoading ? (
//     <span className="w-[63px] h-[38px] rounded-xl is-loading"></span>
//   ) : userData ? (
//     <Link
//       to={"/profile"}
//       className="p-2 text-sm font-medium transition-all border border-gray-400 rounded-xl hover:bg-gray-200"
//     >
//       {userData.username}
//     </Link>
//   ) : (
//     <Link
//       to={"/login"}
//       className="p-2 text-sm font-medium transition-all border border-gray-400 rounded-xl hover:bg-gray-200"
//     >
//       Đăng nhập
//     </Link>
//   );
// }

{
  /* <If condition={pathname !== "/login" && pathname !== "/register"}>
  <Then>
    <If condition={isLoading}>
      <span className="w-[63px] h-[38px] rounded-xl is-loading"></span>
    </If>
    <Else>
      {userData ? (
        <Link
          to={"/profile"}
          className="p-2 text-sm font-medium transition-all border border-gray-400 rounded-xl hover:bg-gray-200"
        >
          {userData.username}
        </Link>
      ) : (
        <Link
          to={"/login"}
          className="p-2 text-sm font-medium transition-all border border-gray-400 rounded-xl hover:bg-gray-200"
        >
          Đăng nhập
        </Link>
      )}
    </Else>
  </Then>
</If>; */
}
