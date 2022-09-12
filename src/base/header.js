import icn from './../assets/image/logo1.png' ;
import Addmodal from "../base/addmodal";
import {Notefication} from "../base/notefication";

export const Header = () => {
    return (
        <header>
            <img src={icn} className='icon' alt="icon"/>
            <Notefication children='Setting'/>
            <Addmodal/>
            <Notefication children='About'/>
        </header>
    )
}