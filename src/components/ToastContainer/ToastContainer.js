import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (type = 'info', message) => {
    
    let toastParameters = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    };

    if (type === 'info') {
        toast.info(message, toastParameters);
    } else if (type === 'error') {
        toast.error(message, toastParameters);
    } else if (type === 'success') {
        toast.success(message, toastParameters);
    } else if (type === 'warning') {
        toast.warn(message, toastParameters);
    } else {
        toast(message, toastParameters);
    }
    
}

export  {ToastContainer, notify};