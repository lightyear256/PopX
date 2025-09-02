import { useState } from "react";
import Container from "../Component/Container";
import InputBox from "../Component/InputBox";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  email: string;
  password: string;
  company?:string;
  phone:string;
  selectValue:string;
}
export default function Signup() {
  const [formData,setFormData]=useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    selectValue: ""
  });
  const navigate=useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (
    !formData.name.trim() ||
    !formData.phone.trim() ||
    !formData.email.trim() ||
    !formData.password.trim() ||
    !formData.selectValue.trim()
  ) {
    return;
  }

  navigate("/user");
};

 const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "" && formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.selectValue.trim() !== "";
  return (
    <div className="w-screen h-screen flex justify-center items-center font-dmsans">
      <Container className={"justify-start items-start"}>
        <div className="flex flex-col justify-start items-start gap-y-4 p-4">
          <div className="text-2xl w-45 font-bold mt-5">
            Create your PopX account
          </div>
          <form className="flex flex-col mt-2 justify-center items-start gap-y-5">
            <InputBox
              title="Full Name"
              required={true}
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <InputBox
              title="Phone Number"
              required={true}
              type="text"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <InputBox
              title="Company Name"
              required={false}
              type="text"
              placeholder="Enter your company name"
              value={formData.company as string}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          
          <div>
            <div>
              Are you an Agency?<span className="text-red-600">*</span>
            </div>
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-1">
                <input
                required={true}
                  className="accent-secondary-500"
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  checked={formData.selectValue === "yes"}
                  onChange={(e) =>
                      setFormData({ ...formData, selectValue: e.target.value })
                    }
                />
                <label>Yes</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  className="accent-secondary-500"
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                  checked={formData.selectValue === "no"}
                  onChange={(e) =>
                      setFormData({ ...formData, selectValue: e.target.value })
                    }
                />
                <label>No</label>
              </div>
            </div>
          </div>
          <Button variant="primary" title="Create Account" size="lg" onClickFunction={handleSubmit} isDisabled={!isFormValid}/>
            </form>
        </div>
      </Container>
    </div>
  );
}
