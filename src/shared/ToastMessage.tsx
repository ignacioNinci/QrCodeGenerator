import toast from 'react-hot-toast';

export const notifyError = (msg: string) => {
    toast.error( msg, {
        style: { fontFamily: 'Outfit' },
        position: 'top-right'
    })
}

export const notifySuccess = ( msg: string ) => {
    toast.success( msg, {
        style: { fontFamily: 'Outfit' },
        position: 'top-right'
    })
}
