import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Gallery = () => {
    const [images, setState] = useState([]);
    const getGallery = ()=>{
        const resp = fetch("https://picsum.photos/v2/list?page=2&limit=6").then((apiData)=>{
            return apiData.json()
        }).then((data)=>{
           // console.log(data);
            setState(data);
        }).catch(()=>{

        });
        // const gallery = resp.json();
        
    }
    useEffect(()=>{
        getGallery();
    },[])
    //console.log(images);
    return (
        <div>
            <div className="row">
                {
                    images.map((currVal,index,arr)=>{
                        return (
                            <React.Fragment key={index}>
                                <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
                                    <img
                                        src={currVal.download_url}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt=""
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery
