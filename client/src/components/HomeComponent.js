import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    "overflow-x": "hidden",
  },
  main: {
    width: "100%",
  },

  errorComponent: {
    padding: " 50px !important",
    margin: " 10px !important",
  },

  button: {
    margin: " 8px !important",
  },
}));

function ErrorFallback({ error, resetErrorBoundary }) {
  const classes = useStyles();

  return (
    <Paper className={classes.errorComponent}>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </Paper>
  );
}
function Bomb({ username }) {
  if (username === "bomb") {
    throw new Error("💥 CABOOM 💥");
  }
  return `Hi ${username}`;
}
export default function Home() {
  const [username, setUsername] = React.useState("");
  const usernameRef = React.useRef(null);
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <TextField
        id="input1"
        label="Username (don't type bomb)"
        value={username}
        ref={usernameRef}
        placeholder={`type "bomb"`}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth

      />
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername("");
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}
