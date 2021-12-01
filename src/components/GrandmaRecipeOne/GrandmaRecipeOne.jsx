import './GrandmaRecipeOne.css'

import React from 'react'

function GrandmaRecipeOne() {
    return (
        <div className="gmRecOne">
        
            <img 
                src="https://cdn.theculturetrip.com/wp-content/uploads/2021/04/2b0fmky-e1619429563127.jpg" 
                alt="" 
            />  
            <div className="gmRecOneInfo">
                <div className="gmRecOneCategory">
                    <span>Lunch</span>
                    <span>Breakfast</span>
                </div>
            <div className="gmRecOneIcons">
                <i className="gmRecOneEdit fas fa-user-edit"></i>
                <i className="gmRecOneDelete fas fa-trash-alt"></i>

            </div>
                <span className="gmRecOneTitle">Lorem ipsum dolor sit amet</span>
                <hr />       
            </div>
            <div className="gmRecOneDescription">  
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci exercitationem reiciendis quisquam nulla atque hic! Libero nulla dolor nemo sint ab cum vitae earum repellendus. Iure doloribus ipsam incidunt.
                Repellendus provident quis officia impedit vero repudiandae architecto hic esse pariatur vel excepturi corporis dicta aspernatur omnis quod odio ipsa voluptas in quam doloremque quas, temporibus sed ut obcaecati! Quas?
                Eveniet odio esse consectetur soluta? At ipsum similique nulla explicabo ducimus earum quis libero et dolores, quae ratione, nisi doloribus animi repellat eos, veniam exercitationem officia eius id quia sed!
                Esse est doloribus ipsum distinctio, sapiente, voluptates tenetur nesciunt labore placeat aspernatur soluta, eligendi quaerat. Ratione eaque, explicabo corrupti perspiciatis quibusdam veniam incidunt esse, consequatur nisi laudantium ducimus debitis excepturi.</p>
            </div>  
        </div>
    )
}

export default GrandmaRecipeOne