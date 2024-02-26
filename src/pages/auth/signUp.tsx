import { JSX } from "react";
import withAuth from "../../components/hoc/withAuth.tsx";

interface SignUpProps {
  elements?: JSX.Element;
}

const signUp = ({ elements }: SignUpProps) => {
  return <>{elements}</>;
};

const SignUp = withAuth(signUp, "signUp");

export default SignUp;
