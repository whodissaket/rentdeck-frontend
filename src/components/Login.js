import { GoogleOutlined } from "@ant-design/icons";
import  firebase from "firebase/app";
import { auth } from "../firebase";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h1>Welcome to RentDeck!</h1>
        <br />
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <button >
            <GoogleOutlined />
            Sign In with Google
          </button>

        </div>
      </div>
    </div>
  );
};
export default Login;
