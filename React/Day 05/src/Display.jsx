import React from 'react'

export default function Display({ movies }) {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    // console.log(IMGPATH+movies.poster_path)


    return (
        <div className='container'>
            <div className="row gy-4">
                {
                    movies.map((data, index) => {
                        return (
                            <div className=' col-3'>
                                <div className="card" >
                                    <img src={IMGPATH+data.poster_path} className="card-img-top" alt={""} />
                                    <div className="card-body">
                                        <h6 className="card-title">{data.title}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}
