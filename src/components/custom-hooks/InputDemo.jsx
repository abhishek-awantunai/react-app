import React from 'react'
import useInput from './hooks/useInput';

const InputDemo = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitForm = () => {
        alert(`Hey hiii ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <form>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input {...bindFirstName}  type="text" className="form-control" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group">
                        <input {...bindLastName}  type="text" className="form-control" placeholder="Enter Last Name"/>
                    </div>
                    {/* <div className="form-group">
                        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control" placeholder="Enter Last Name"/>
                    </div> */}
                    <button onClick={submitForm} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default InputDemo;