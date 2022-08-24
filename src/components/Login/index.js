import auth from "../../assets/images/auth.png";
import google from "../../assets/images/google.png";
import "./login.css";

const Login = () => {
  return (
    <>
      <main className="auth-container">
        <div className="auth-header">
          <img src={auth} className="h-100" alt="Auth Background" />
        </div>
        <div className="auth-body">
          <div className="row" style={{ gridRowGap: "1rem" }}>
            <div class="input-group">
              <input
                type="text"
                id="username"
                placeholder="Username/Mobile No.*"
                required
              />
              <label for="username">Username/Mobile No.*</label>
            </div>
            <div class="input-group">
              <input
                type="password"
                id="password"
                placeholder="Password*"
                required
              />
              <label for="password">Password*</label>
            </div>
            <div class="input-group">
              <button className="w-100">Login</button>
            </div>
            <div className="text-center text-dark-grey">or</div>
            <div className="input-group">
              <button className="google w-100">
                Continue with Google
                <img src={google} alt="" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
