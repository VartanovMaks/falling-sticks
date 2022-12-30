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
                    arrStick.map((item, index)=>(
                        <div key={item.stick}>
                            <h3>{`${item.stick} - ${item.interval/1000} с` }</h3> 
                            {(index === 7) && <h4>Finished</h4>}
                        </div>
                        )
                    )
           }
        </div>
    );
}

export default DisplayProtocol;