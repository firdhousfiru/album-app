import React from 'react'
import NavBar from './NavBar'

const Search = () => {
    return (
        <div>
            <NavBar/>
            <h1><center><b>SEARCH PHOTO</b></center></h1><br></br>
            <div className="container row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <label htmlFor="" className="form-label">SEARCH</label>
                        <input type="text" className="form-control" />

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center><button className="btn btn-warning">SEARCH</button></center> 
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Search