import './style/App.css';
import { Outlet } from "react-router-dom";

export const App=() =>{
  return (
    <div >
 <Outlet/>
    </div>
    
  );
};
export default App;


