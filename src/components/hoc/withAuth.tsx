import React, { ComponentType, JSX, SyntheticEvent, useRef } from "react";
import { auth } from "../../firebase/firebase.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/typedReduxHooks.ts";
import { IUser, setUser } from "../../store/slices/authSlice.ts";

interface myProps {
  elements: JSX.Element;
}

const withAuth = <P extends myProps>(
  WrappedComponent: ComponentType<P>,
  type: string,
) => {
  const WithAuth: React.FC<P> = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordConfirmRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onLogin = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();
      try {
        if (emailRef.current && passwordRef.current) {
          const userCredential = await auth
            .signInWithEmailAndPassword(
              emailRef.current?.value,
              passwordRef.current?.value,
            )
            .then(function (user: IUser) {
              dispatch(
                setUser({
                  email: user.email,
                  token: user.accessToken,
                  id: user.id,
                }),
              );
            });
          const user = userCredential.user;
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
        if (emailRef.current && passwordRef.current) {
          await auth.createUserWithEmailAndPassword(
            emailRef.current?.value,
            passwordRef.current?.value,
          );
          console.log("Пользователь успешно зарегистрирован!");
        }
        // Перенаправление на главную страницу
      } catch (error) {
        console.error("Ошибка регистрации:", error);
      }
    };

    const jsx = () => {
      return (
        <>
          <div className="login-wrapper w-[400px] h-fit rounded-xl bg-gray-100 p-4 mx-auto">
            <h2 className="text-lg font-semibold text-center mb-5">
              Зарегистрироваться
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
              {type === "signup" && (
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
                Регистрация
              </button>
            </form>
          </div>
        </>
      );
    };

    const elements = jsx();

    return <WrappedComponent elements={elements} />;
  };

  return WithAuth;
};

export default withAuth;
