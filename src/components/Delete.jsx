import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
    return (
        <div>
            <NavBar/>
            <h1><center><b>DELETE PHOTO</b></center></h1><br></br>
            <div className="container row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DELETE</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-danger">DELETE</button></center>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Delete