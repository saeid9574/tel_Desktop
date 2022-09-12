import {routs} from "./configs/Routs" ;
import {BrowserRouter, Route, Routes} from "react-router-dom" ;
import {Fragment} from "react" ;
import 'antd/dist/antd.css' ;

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                        routs.map((route , key) => {
                            const {element , layout , ...other} = route ;
                            const Layout = layout ? layout : Fragment ;
                            return (
                                <Route key={key.toString()} element={<Layout children={element}/>} {...other}/>
                            )
                        })
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App ;