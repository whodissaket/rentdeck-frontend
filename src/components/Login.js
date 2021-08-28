import { GoogleOutlined } from "@ant-design/icons";
import  firebase from "firebase/app";
import { auth } from "../firebase";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to talkey!</h1>
        <br />
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          Sign In with Google
        </div>
      </div>
    </div>
  );
};
export default Login;
