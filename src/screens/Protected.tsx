import React, { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { fbAuth } from '../config/FirebaseSetup/firebaseMethods';
import { Audio } from 'react-loader-spinner'



const Protected = (props: any) => {
    const { Screen } = props;
    const [loader, setLoader] = useState<any>(true);

    const navigate = useNavigate();
    let checkAuth = () => {
        setLoader(true);

        fbAuth()
            .then((res:any) => {
                setLoader(false);
            })
            .catch((err:any) => {
                setLoader(false);
                navigate('/login')
            })
    }


    useEffect(() => {
        checkAuth();
        setTimeout(() => {
            setLoader(false);
          }, 50000);
    }, []
    );


    return (
        <>
            {loader ?
            <div className='d-flex justify-content-center align-items-center'>
                <img src="https://i.gifer.com/JVX7.gif" width='50%'/>
            </div>
          
           : <Screen />}
        </>
    )


}

export default Protected