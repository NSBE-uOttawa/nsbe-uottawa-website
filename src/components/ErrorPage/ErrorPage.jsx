import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="text-center grid h-screen place-content-center font-extrabold  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-900"
      id="error-page"
    >
      <h1 className="text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">
        <p className="text-2xl hover:text-indigo-400 hover:underline">
          Click here to go HOME...
        </p>
      </a>
    </div>
  );
}
