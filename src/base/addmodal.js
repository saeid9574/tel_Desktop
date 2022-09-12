import {useState} from "react" ;
import {Input, message, Modal} from "antd" ;
import {List} from "../helper/list" ;
import {useDispatch} from "react-redux";
import {ACTION_ADD_USER} from "../redux/slice/userSlice";
import {useChange} from "../Hooks/useChange";

const Addmodal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false) ;
    const [num , onChangeNum , reset] = useChange('') ;
    const dispatcher = useDispatch() ;

    const showModal = () =>{
        setIsModalVisible(true) ;
    }
    const handleOk = ({visible}) => {
        const x = List.filter((li) => {
            return li.num === num
        })[0] ;
        console.log(x , 'hgjh')
        if (x) {
            dispatcher(ACTION_ADD_USER(x)) ;
            message.success('کاربر ثبت شد')
        }
        else {
            message.error('شماره مورد نظر عضو اپ نیست .')
        }
        reset() ;
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <span onClick={showModal}>contact</span>
            <Modal title="Contacts" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Number" type='number' value={num} onChange={onChangeNum}/>
            </Modal>
        </>
    )
}
export default Addmodal ;