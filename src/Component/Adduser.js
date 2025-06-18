import React from "react";

function Adduser() {
    return (

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Adduser</h5>
                        <form>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 ">Username</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 ">Email</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control"/>
                                </div>   
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 ">Status</label>
                                <div class="col-sm-10">
                                    <select name="status" className="form-control">
                                        <option value="">-- Select Status --</option>
                                        <option value="1">Active</option>
                                        <option value="1">Inactive</option>   
                                    </select>
                                </div>   
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 "></label>
                                <div class="col-sm-10">
                                    <button name="submit" className="btn btn-success">Submit</button>
                                </div>   
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Adduser;
