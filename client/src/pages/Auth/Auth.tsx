import {Button, Input, Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginError,
} from "../../globalStores/AuthStore/authStore";
import type {RootState} from "../../globalStores/store";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading, error} = useSelector((state: RootState) => state.auth);

  const handleLogin = async (values: {username: string; password: string}) => {
    try {
      dispatch(loginStart());

      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.username,
          password: values.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login error");
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);

      dispatch(loginSuccess(data));

      navigate("/");
    } catch (err) {
      dispatch(loginError("Login failed: " + err));
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen flex  flex-col justify-center items-center text-center">
      <h1 className="mb-20 text-5xl">Pinterest</h1>
      <Form
        name="login"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        style={{maxWidth: 600}}
        initialValues={{remember: true}}
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="username"
          rules={[{required: true, message: "Please input your email!"}]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{required: true, message: "Please input your password!"}]}
        >
          <Input.Password />
        </Form.Item>

        {error && <p style={{color: "red"}}>{error}</p>}

        <Form.Item wrapperCol={{offset: 8, span: 16}}>
          <Button
            color="red"
            variant="solid"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Auth;
