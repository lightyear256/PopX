import { LogOut } from "lucide-react";
import Container from "../Component/Container";
import { useNavigate } from "react-router-dom";
export default function Account() {
    const navigate=useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center font-dmsans">
      <Container className={"justify-start items-start bg-gray-100"}>
        <div className="w-full h-16 px-4 text-xl flex gap-x-22 items-center bg-white" >
            <div>Account Settings</div>
        <LogOut className="text-gray-400 cursor-pointer" onClick={()=>navigate("/")}/>
            </div>
        <div className="flex flex-col justify-start items-start gap-y-4 ">
        <div className="flex items-center gap-x-4 p-4 ">
            <img 
              src="../../public/profile-image.webp" 
              alt="Profile" 
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            />
            <div className="flex flex-col">
              <div className="font-semibold text-gray-900">Marry Doe</div>
              <div className="text-gray-600 text-sm">MarryDoe@gmail.com</div>
            </div>
          </div>
          <div className="text-gray-500 border-b-gray-300 border-b-2 border-dashed p-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit assumenda ipsa aliquid. </div>
          <div className="border-b-2 border-dashed p-2 w-full mt-50 text-gray-300"></div>
        </div>
      </Container>
    </div>
  );
}
