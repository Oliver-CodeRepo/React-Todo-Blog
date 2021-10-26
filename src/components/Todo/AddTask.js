import React from 'react'

function AddTask() {
    return (
        <div className='col-lg-4 col-md-5 col-sm-12'>
            <form className='form-group border rounded p-3 my-3'>
                <h3 className='mb-2 text-center'>Add Task Form</h3>
                <div className="form-group mt-2">
                    <label for="">Task</label>
                    <input type="text" name="task" id="" className="form-control" placeholder="" aria-describedby="taskId" />
                    <small id="taskId" className="text-muted"></small>
                </div>
                <div className="form-group mt-2">
                    <label for="">Date</label>
                    <input type="date" name="date" id="" className="form-control" placeholder="" aria-describedby="dateId" />
                </div>
                <div className="form-group mt-2">
                    <input type="checkbox" name="task" id="" className="mr-2" placeholder="" aria-describedby="taskId" />
                    <label for="">&nbsp; Set Reminder</label>
                </div>
                <div className="form-group mt-2">
                    <input type="submit" name="task" id="" className="btn btn-primary btn-block w-100" value='Add Todo Task' placeholder="" aria-describedby="taskId" />
                </div>
            </form>
        </div>
    )
}

export default AddTask
