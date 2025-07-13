import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentUser } from "@/store/slices/authSlice";
import { login } from "@/services";
import Login from "@/components/Login";

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const response = await login({ email, password });
    setLoading(false);

    if (!response || !response.success) {
      setError("Invalid credentials or server error");
      return;
    }

    // Update Redux store with user data
    if (response.data?.user) {
      dispatch(setCurrentUser(response.data.user));
      navigate("/dashboard");
    }
  };

  return (
    <Login
      email={email}
      password={password}
      loading={loading}
      error={error}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
}
