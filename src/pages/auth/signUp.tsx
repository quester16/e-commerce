import { FC, ReactNode } from "react";
import withAuth from "../../components/hoc/withAuth.tsx";

interface SignUpProps {
  elements: ReactNode;
}

const SignUp: FC<SignUpProps> = ({ elements }) => {
  return <>{elements}</>;
};

const signUP = withAuth(SignUp, "signUp");

export default signUP;
