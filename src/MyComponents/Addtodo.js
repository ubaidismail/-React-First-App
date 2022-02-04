import React, { useState } from 'react';

export const Addtodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit =() => {

    }
    return <div className='container'>
        
        <h3 className='mt-2'>Add Todos</h3>
    
        <form onSubmit={submit}>
            <div className="form-group mb-2 mt-2">
                <label for="exampleInputEmail1">Title</label>
                <input type="name" className="form-control" id="title"  placeholder="Add todo"  value={title}/>
            </div>
            <div className="form-group mt-2">
                <label for="exampleInputPassword1" className='mb-2'>Todo Description</label>
                <input type="text" className="form-control" id="desc" placeholder="Description" value={desc} />
            </div>
            <button type="submit" className="btn btn-success mt-3">Add todo</button>
        </form>
    </div>;
};
