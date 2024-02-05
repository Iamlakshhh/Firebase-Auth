import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Signin from "./pages/Signin";
import './App.css';
import Signup from "./pages/Signup";

const auth  = getAuth(app);


function App() {

  const singupUser = ()=>{
    createUserWithEmailAndPassword(auth, 'laksssh89@gmail.com', '1234567890').then((value)=>console.log(value));
  };

  return (
    <div className="App">
        <Signup/>
        <Signin/>
    </div>
  );
}

export default App;
