import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux" ;
import {ACTION_ADD_MESSSAGE} from "./../redux/slice/messageSlice" ;
import './../assets/css/main.css' ;
import {Button,} from "antd" ;
import TextArea from "antd/es/input/TextArea" ;
import {useChange} from "../Hooks/useChange";

const User = () => {
    const {user_id} = useParams() ;
    const [mesg , changeMessage,reset] = useChange('') ;

    const {msg} = useSelector(state => state) ;

    const dispatcher = useDispatch() ;

    const onSend = () => {
        const y = {user_id , mesg , time : new Date().toLocaleTimeString()}
        dispatcher(ACTION_ADD_MESSSAGE(y)) ;
        reset() ;
    }

    return (
        <>
            {
                msg.message.length ?
                    msg.message.filter((mg) => mg.user_id === user_id).map((mg , index) => {
                        return(
                            <div className='payamha' key={index.toString()}>
                                <div className='messagecadr'>
                                    {mg.mesg}
                                </div>
                                <div style={{direction : 'ltr'}}>
                                    {mg.time}
                                </div>
                            </div>
                        )
                    }) :
                    <h4 style={{ direction : "rtl" ,textAlign : 'center' , marginTop : '2rem'}}>هنوز پیامی ارسال نشده است .</h4>
            }
            <div className="inp">
                <TextArea value={mesg} onChange={changeMessage} placeholder='Writing a message ...'/>
                <Button style={{height : "auto"}} disabled={mesg.trim() ? false : true} onClick={onSend}>Send</Button>
            </div>

        </>
    )
}
export default User ;