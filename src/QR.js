import React from 'react';
import './QR.css'
import { useState } from 'react';

const QR = () =>{
    const [QR,setQR]=useState()
    const[img,setimg] = useState('')
    const [display,setdisplay] = useState('none')
    const url= 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
    
    const handlechange = (e)=>[
        setQR(e.target.value)
    ]
    const handleQR =() =>{
        setdisplay('block')
        let lastQr = url+QR;
        setimg(lastQr)
    }
    return(
        <>
        <main>
        <header>
            <h3>Enter your text or URL</h3>
        </header>
        <section>
            <input type="text" name="input" id="input"
             value={QR}
             onChange={handlechange}
             placeholder="Text or URL"/>
            {/* <canvas id="qr"></canvas> */}
            <img style={{display :display}} src={img}  alt='img' />
            <button id="generate-qr-btn" onClick={handleQR}>Generate QR Code</button>
           
        </section>
    </main>

    
    </>
    )
}
export default QR