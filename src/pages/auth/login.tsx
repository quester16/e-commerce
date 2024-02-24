import { JSX } from "react";

interface LoginProps {
  elements?: JSX.Element;
}

const Login = ({ elements }: LoginProps) => {
  return <>{elements}</>;
};

export default Login;
