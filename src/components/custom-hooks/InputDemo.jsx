import React, { useState } from 'react'
import useInput from './hooks/useInput';

const InputDemo = () => {
    const [firstName, setFirstname, resetFirstName] = useInput('');
    const [lastName, setLastname, resetLastName] = useInput('');

    const submitForm = (e) => {
        e.preventDefault();
        alert('Hey hiii ' + firstName + ' ' + lastName);
        resetFirstName();
        resetLastName();
    }

    return (
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <form>
                    <div className="form-group">
                        <input value={firstName} onChange={(e)=>setFirstname(e.target.value)} type="text" className="form-control" placeholder="Enter First Name" />
                    </div>
                    <div className="form-group">
                        <input value={lastName} onChange={(e)=>setLastname(e.target.value)} type="text" className="form-control" placeholder="Enter Last Name" />
                    </div>
                    <button onClick={submitForm} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InputDemo