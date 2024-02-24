import { JSX } from "react";
import withAuth from "../../components/hoc/withAuth.tsx";

interface LoginProps {
  elements?: JSX.Element;
}

const login = ({ elements }: LoginProps) => {
  return <>{elements}</>;
};

const Login = withAuth(login, "login");
export default Login;
