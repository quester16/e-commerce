import React, { ComponentType, SyntheticEvent, useRef } from "react";
import { auth } from "../../firebase/firebase.ts";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/typedReduxHooks.ts";
import { setUser } from "../../store/slices/authSlice.ts";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  type: string,
) => {
  const WithAuth: React.FC<P> = (props) => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onLogin = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();
      try {
        if (emailRef.current && passwordRef.current) {
          const userCredential = await auth.signInWithEmailAndPassword(
            emailRef.current?.value,
            passwordRef.current?.value,
          );
          const user = userCredential.user;
          dispatch(
            setUser({
              email: user?.email,
              token: user?.refreshToken,
              id: user?.uid,
            }),
          );
          console.log("Пользователь вошел в систему:", user?.email);
          navigate("/");
        }
      } catch (error) {
        console.error("Ошибка входа:", error);
      }
    };

    const onSignUp = async (
      e: SyntheticEvent<HTMLFormElement, SubmitEvent>,
    ) => {
      e.preventDefault();
      try {
        if (
          emailRef.current &&
          passwordRef.current &&
          passwordRef.current?.value === passwordConfirmRef.current?.value
        ) {
          await auth.createUserWithEmailAndPassword(
            emailRef.current?.value,
            passwordRef.current?.value,
          );
          const user = auth.currentUser;
          dispatch(
            setUser({
              email: user?.email,
              token: user?.refreshToken,
              id: user?.uid,
            }),
          );
          console.log("Пользователь успешно зарегистрирован!");
          navigate("/");
        }
        // Перенаправление на главную страницу
      } catch (error) {
        console.error("Ошибка регистрации:", error);
      }
    };

    const renderLink = (type: string) => {
      if (type === "login") {
        return (
          <>
            <p> Don't have an account? </p>
            <Link to={"/signUp"} className="link underline">
              Register
            </Link>
          </>
        );
      }
      return (
        <>
          <p> If you have an account </p>
          <Link to={"/login"} className="link underline">
            Login
          </Link>
        </>
      );
    };

    const jsx = () => {
      return (
        <>
          <div className="login-wrapper w-[400px] h-fit rounded-xl bg-gray-100 p-4 mx-auto">
            <h2 className="text-lg font-semibold text-center mb-5">
              {type === "login" ? "Войти" : "Зарегистрироваться"}
            </h2>
            <form onSubmit={type === "login" ? onLogin : onSignUp}>
              <div className="email login">
                <label className="label" htmlFor="email">
                  Почта
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="password login ">
                <label className="label" htmlFor="password">
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordRef}
                  required
                />
              </div>
              {type !== "login" && (
                <div className="password-confirm login">
                  <label className="label" htmlFor="password-confirm">
                    Подтвердите пароль
                  </label>
                  <input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    ref={passwordConfirmRef}
                    required
                  />
                </div>
              )}
              <button type="submit" className=" btn " style={{ width: "100%" }}>
                {type === "login" ? "Войти" : "Регистрация"}
              </button>
            </form>
            <div className="mt-3 text-center">
              {type === "login" ? renderLink("login") : renderLink("signUp")}
            </div>
          </div>
        </>
      );
    };

    const elements = jsx();

    return <WrappedComponent {...props} elements={elements} />;
  };

  return WithAuth;
};

export default withAuth;
