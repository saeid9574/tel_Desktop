import './../assets/css/main.css' ;
import {Link} from "react-router-dom" ;
import {useSelector} from "react-redux" ;
import {useEffect, useState} from "react";
import {useChange} from "../Hooks/useChange";
import {Input} from "reactstrap";
import {Header} from "../base/header";

const Layout = ({children}) => {
    const {us} = useSelector(state => state) ;
    const [search , onChangeSearch] = useChange('') ;
    const [user , setUser] = useState([]) ;

    useEffect( () => {
        setUser(us.users) ;
    } , [us])

    useEffect(
        () => {
            if (search.length > 0) {
                setUser(us.users.filter((l) => {
                    return l.name.toLowerCase().match(search) ;
                }))
            }
            if (search.length === 0) {
                setUser(us.users) ;
            }
        }
        , [search]) ;

    return(
        <>
            <Header/>
            <div className="main">
                <div id='users' className="users">
                    <Input placeholder='Search' value={search} onChange={onChangeSearch}/>
                    {
                        user.length ?
                            user.map((u , i) => {
                                return (
                                    <Link to={`/user/${i+1}`} key={i.toString()} className='user'>
                                        <div className="img">
                                            <img src={u.img} alt=""/>
                                        </div>
                                        <div className="us">
                                            <h6>{u.name}</h6>
                                            <p>{u.num}</p>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <h5 style={{textAlign : "center" , direction : "rtl"}}>کاربری موجود نیست !!</h5>
                    }
                </div>
                <div className="message">
                    <div id='payam' className="payam">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout ;