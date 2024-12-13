import React, { useState } from 'react'
import logo from '../assets/logo-qr-generator.svg';
import toast, { Toaster } from 'react-hot-toast';

interface MainInputProps {
    onShowQr: () => void,
    onUrlChange: (url: string) => void;
}

export const MainInput: React.FC<MainInputProps> = ({ onShowQr, onUrlChange }): JSX.Element => {

    const [url, setUrl] = useState<string>('');

    const handleGenerateCode = () => {
        if (url === '') {
            notify();
            return;
        }
        onUrlChange(url);
        onShowQr();
    }

    const notify = () => {
        toast.error('Ingrese URL', {
            style: {
                fontFamily: 'Outfit'
            },
            position: 'top-right'
        });
    }


  return (
    <>
        <section>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <div className='input-container'>
                <input type="text" placeholder='Enter an url' onChange={ e => setUrl(e.currentTarget.value) } />
                <button className='input-button' onClick={ handleGenerateCode }>
                    QR code
                </button>
                <Toaster />
            </div>
        </section>
    </>
  )
}
