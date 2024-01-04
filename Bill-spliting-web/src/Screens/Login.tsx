import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";

const LOGIN_URL = '/auth/login'
const Login = () => {
  const { setAuth }: any = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true,

        });
      console.log(JSON.stringify(response?.data))
      const accesstoken = response.data?.access_token;
      setAuth({ user, pwd, accesstoken })
      setUser("");
      setPwd("");
      setSuccess(true);

    } catch (error: any) {
      if (!error?.response) {
        setErrMsg('No server Response')
      } else if (error.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (error.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      if (errRef.current)
        errRef.current.focus();
    }
    console.log(user, pwd);

  };
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive">
        {errMsg}
      </p>
      <h1 className="white">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Need An Account?
        <br />
        <span className="line">
          {/* //replace with link */}
          <a href="#">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
