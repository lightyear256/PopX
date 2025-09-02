import { useNavigate } from 'react-router-dom';
import Button from '../Component/Button';
import Container from '../Component/Container';
export default function Home(){
    const navigate=useNavigate();
    return(
        <div className="w-screen h-screen flex justify-center items-center font-dmsans">
            <Container className={"items-start justify-end"}>
                <div className='flex flex-col justify-center items-start gap-y-2 p-4'>
                <div className='text-2xl font-bold'>Welcome to PopX</div>
                <div className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                
                <Button variant='primary' size='lg' isDisabled={false} title={'Create Account'} onClickFunction={()=>navigate('/signup')} ></Button>
                <Button variant='secondary' size='lg' isDisabled={false} title={'Already Registered? Login'} onClickFunction={()=>navigate('/signin')} ></Button>
                </div>
            </Container>
        </div>
    )
}