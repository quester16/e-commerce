import { ChangeEvent, FC, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.ts";
import axios from "axios";
import { IComments } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import {
  addToComments,
  fetchCommentsThunk,
} from "../../store/slices/authSlice.ts";
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries.tsx";

// todo: надо сделать через использования redux чтобы автоматически отображались комментарий

interface CommentsProps {
  item: string;
}
const Comments: FC<CommentsProps> = (props) => {
  const dispatch = useAppDispatch();
  const { comments, commentLoading, commentError } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    comments.length <= 0 ? dispatch(fetchCommentsThunk()) : null;
  }, [dispatch, comments.length]);

  const { isAuth, email } = useAuth();
  const [height, setHeight] = useState("50px");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHeight(event.target.scrollHeight + "px");
  };
  function timeAgo(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  }

  const sendComment = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textareaValue = e.target[0] as HTMLFormElement;

    const newComment: IComments = {
      createdAt: new Date().toUTCString(),
      name: email ? email : "",
      text: textareaValue.value,
      item: props.item,
    };
    dispatch(addToComments(newComment));
    axios
      .post("https://6418782c29e7e36438e98817.mockapi.io/comments", newComment)
      .then((res) => console.log(res));
    textareaValue.value = "";
    setHeight("50px");
  };

  const render = () => {
    return comments.map((item: IComments) => {
      console.log(item.createdAt);
      console.log("working");
      if (item.item.trim() === props.item.trim()) {
        return (
          <div key={item.id} className="bg-gray-100 rounded-md mb-5 p-2">
            <div className="flex items-baseline">
              <div className="font-medium mr-2">{item.name}</div>

              <div className="font-light">
                {timeAgo(new Date(item.createdAt))}
              </div>
            </div>
            <div className="font-normal">{item.text}</div>
          </div>
        );
      }
    });
  };

  const loading = commentLoading ? (
    <p className="text-center font-semibold">Loading...</p>
  ) : null;
  const error = commentError ? <ErrorBoundaries /> : null;
  const content = !(error && loading) ? render() : null;
  return (
    <div className="w-full bg-gray-200 rounded-md p-2">
      <div className="leave-comments  mb-5 ">
        <h4 className="text-2xl">Комментарии</h4>
        {isAuth ? (
          <form action="#" onSubmit={sendComment}>
            <textarea
              id="comment-textarea"
              placeholder="Напишите комментарий..."
              style={{ height: height }}
              onChange={handleChange}
            ></textarea>
            <button className="btn secondary mt-2" type="submit">
              Оставить Комментарий
            </button>
          </form>
        ) : (
          <div className="text-center bg-red-300 p-2 rounded-md">
            Войдите чтобы оставить комментарий
          </div>
        )}
      </div>
      <div className="comments">
        {loading}
        {error}
        {content}
      </div>
    </div>
  );
};

export default Comments;
