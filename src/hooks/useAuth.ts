import { useAppSelector } from "./typedReduxHooks.ts";

const useAuth = () => {
  const { id, email, token } = useAppSelector((state) => state.auth);

  return {
    isAuth: Boolean(email),
    email,
    token,
    id,
  };
};

export default useAuth;
