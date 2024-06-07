import React from 'react'
import NavBar from './NavBar'

const Add = () => {
    return (
        <div>
            <NavBar/>
            <center><h1><b>PHOTO ALBUM</b></h1></center><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ALBUM TITLE</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">USER ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">ALBUM ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">CATEGORY</label>
                                <select name="" id="" className="form-control">
                                    <option value="scienctific">scienctific</option>
                                    <option value="fantasy">fantasy</option>
                                    <option value="space">space</option>
                                    <option value="nature">nature</option>
                                    <option value="city">city</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">DATE</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">PHOTO UPLOAD</label>
                                <input type="file" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                               <center> <button className="btn btn-dark">SUBMIT</button></center>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add