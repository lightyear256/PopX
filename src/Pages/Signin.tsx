import Container from "../Component/Container";
import InputBox from "../Component/InputBox";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
interface FormData {
  email: string;
  password: string;
}
export default function Signin() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState<FormData>({
        email: "",
        password: "",
      });
      const handleSubmit = () => {
  if (
    !formData.email.trim() ||
    !formData.password.trim()
  ) {
    return;
  }

  navigate("/user");
};
 const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";
  return (
    <div className="w-screen h-screen flex justify-center items-center font-dmsans">
      <Container className={"justify-start items-start"}>
        <div className="flex flex-col justify-start items-start gap-y-4 p-4">
          <div className="text-2xl w-45 font-bold mt-5">
            Signin to your PopX account
          </div>
          <div className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <form className="flex flex-col mt-2 justify-center items-center gap-y-5">
            <InputBox
              title="Email Address"
              required={true}
              type="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <InputBox
              title="Password"
              required={true}
              type="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={(e) => {setFormData({ ...formData, password: e.target.value })

            }}
            />
          <Button variant="primary" title="Login" size="lg" onClickFunction={handleSubmit} isDisabled={!isFormValid}/>
          </form>
        </div>
      </Container>
    </div>
  );
}
