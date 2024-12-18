import React, { useState } from 'react'
import logo from '../assets/logo-qr-generator.svg';
import { notifyError, notifySuccess } from '../shared/ToastMessage';

interface MainInputProps {
    onShowQr: () => void,
    onUrlChange: (url: string) => void;
}

export const MainInput: React.FC<MainInputProps> = ({ onShowQr, onUrlChange }): JSX.Element => {

    const [url, setUrl] = useState<string>('');

    const handleGenerateCode = () => {
        if (url === '') {
            notifyError('Ingrese URL');
            return;
        }
        onUrlChange(url);
        onShowQr();
        notifySuccess('Código generado exitosamente!');
    }



  return (
    <>
        <section>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <div className='input-container'>
                <input 
                    type="text" 
                    placeholder='Enter an url' 
                    onChange={ e => setUrl(e.currentTarget.value) }
                    onKeyDown={e => e.key === 'Enter' && handleGenerateCode()} 
                />
                <button className='input-button' onClick={ handleGenerateCode }>
                    QR code
                </button>
            </div>
        </section>
    </>
  )
}
