import { FC, SyntheticEvent, useRef } from "react";
import { auth } from "../firebase/firebase.ts";

const Login: FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null);
  const onSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    try {
      if (emailRef.current && passwordRef.current) {
        await auth.createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value,
        );
        console.log("Пользователь успешно зарегистрирован!");
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <>
      <div className="login-wrapper w-[400px] h-fit rounded-xl bg-gray-100 p-4 mx-auto">
        <h2 className="text-lg font-semibold text-center mb-5">
          Зарегистрироваться
        </h2>
        <form onSubmit={onSubmit}>
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
          <button type="submit" className=" btn " style={{ width: "100%" }}>
            Регистрация
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
