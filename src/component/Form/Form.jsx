import { useState } from "react";

 
const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [isCheck, setIsCheck] = useState(false)
    // console.log(name,email,pass)
    const hundleEvent = e => {
        e.preventDefault();
        if(!isCheck){
            return;
        }
        const user = {
            name: name,
            email: email,
            password: pass
        }
        console.log(user)
        setIsSubmit(true)
    }
    return (
         <div>
            <div className="lg:w-96 w-80 mx-auto">
                <form onSubmit={e => hundleEvent(e)} className="bg-orange-500 shadow-lg rounded-xl p-5 space-y-2 flex flex-col items-start">
                    <label className="text-lg font-semibold">Name : </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-full rounded px-3 py-1 border-none outline-none"  required/>
                    <label className="text-lg font-semibold">Email : </label>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="w-full rounded px-3 py-1 border-none outline-none" required />
                    <label className="text-lg font-semibold">Pass : </label>
                    <input onChange={e => setPass(e.target.value)}  type="password" placeholder="Enter your Pass" className="w-full rounded px-3 py-1 border-none outline-none" required />
                   <input type="checkbox" name="" id="" onChange={e => setIsCheck(e.target.checked)} /> Do you agree our therms & condition
                    <div>
                        <button type="submit" className="px-4 py-1 border-2 border-none outline-none rounded-lg bg-teal-950 text-white font-bold text-xl">Sign up</button>
                    </div>
                </form>
            </div>
             {
                isSubmit && 
                <div className="h-screen bg-purple-400 w-full fixed top-0 left-0 flex justify-center items-center ">
                    <div className="bg-red-200 rounded flex flex-col justify-center items-center space-y-2  w-80 lg:w-96 h-72">
                        <h2 className="text-purple-800 text-3xl">Form submited</h2>
                        <p className="text-2xl">Name : {name}</p>
                        <p className="text-2xl">Email : {email}</p>
                    </div>
                </div>
             }
         </div>
    );
};

export default Form;