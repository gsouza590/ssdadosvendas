import icon from '../../assets/envelope.svg';
import './style.css';
import axios from 'axios';
import { BASE_URL }  from '../../Utils/request';
import { toast } from 'react-toastify';


    type Props={
        saleId:number;
    }

    function handClick(id:number){
        axios(`${BASE_URL}/sales/${id}/notification`).then
        (()=>{toast.info("SMS Enviado com Sucesso")});
    }


function NotificationButton({saleId}:Props){
    return(
        <div className="ntf-btn" onClick={()=> handClick(saleId)}>
            <img src={icon} alt="notificar" />
        </div>
            )
}
export default NotificationButton