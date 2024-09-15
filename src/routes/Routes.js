import React from "react";
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../pages/App';

function RoutesPage(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
            </Routes>
        
        </BrowserRouter>

    )


}


export default RoutesPage;