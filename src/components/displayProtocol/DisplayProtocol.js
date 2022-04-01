import React, { useEffect, useState } from 'react';

function DisplayProtocol({stick}) {
    const [arrStick, setArrStick]=useState([]);

    useEffect(()=>{
        if(stick.stick === -1) setArrStick([]);
        else {
            let tmp = [...arrStick];
            tmp.push(stick);
            setArrStick(tmp);
        }
    },[stick]);

    return (
        <div className='column div-protocol'>
           {arrStick.length>0 && 
                    arrStick.map(item=>(
                        <div key={item.stick}>{`${item.stick} - ${item.interval/1000}с`}</div>
                        )
                    )
           }
        </div>
    );
}

export default DisplayProtocol;