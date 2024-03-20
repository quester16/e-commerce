import { FC } from "react";
import useAuth from "../hooks/useAuth.ts";
import { useAppDispatch } from "../hooks/typedReduxHooks.ts";
import { removeUser } from "../store/slices/authSlice.ts";
import { useNavigate } from "react-router-dom";

const Profile: FC = () => {
  const { email } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <div className="rounded-md bg-amber-100 w-80 p-2 relative">
      <h1 className="text-3xl font-medium">Профиль</h1>
      <h3 className="text-lg">{email}</h3>
      <button className="btn right-0 secondary" onClick={onLogOut}>
        Выйти
      </button>
    </div>
  );
};

export default Profile;
