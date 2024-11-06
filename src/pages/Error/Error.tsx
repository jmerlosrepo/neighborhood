import { useRouteError } from "react-router-dom";

type Props = {};

function Error({}: Props) {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error).message}</i>
      </p>
    </div>
  );
}

export default Error;
