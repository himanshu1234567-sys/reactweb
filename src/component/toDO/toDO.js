import React, { useState } from 'react'
import './style.css'
const ToDO = () => {
    const [inputData, setinputData] = useState("");
    const [items, setItems] = useState([])
        

    const addItem = () => {
        if (!inputData
        ) {
            alert("plz fill data")
        } else {
            const myNewData = {
                id : new Date ().getTime().toString(),
                name: inputData,
            }
            setItems([...items, myNewData]);
            setinputData('');
        }
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo logo" srcset="" />
                        <figcaption>Add your fav items</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='📝Add Item' className='form-control' value={inputData} onChange={(event) => setinputData(event.target.value)} />

                        <i className=" fa fa-solid fa-plus" onClick={addItem} />

                    </div>
                    <div className="showItems">
                        {items.map((curelem, index) => {
                            return (
                                <div className="eachItem" key={index}>
                                    <h3>{curelem.name}</h3>
                                    <div className="todo-btn">  <i className=" far  fa-edit add-btn" ></i>
                                        <i className=" far fa-solid fa-trash-alt"></i></div>
                                </div>
                            );
                        })}

                    </div>



                    <div className="showItems">
                        <button className=' btn effect04' data-sm-link-text="Remove All"><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDO;
