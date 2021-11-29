import React, { useState } from 'react';

import { InputGroup, FormControl, Button } from "react-bootstrap";
import './OnlineRecipeSearch.css';


function OnlineRecipeSearch(){
    // const [search, setSearch] = useState('')
    // const updateSearch = e => {
    //     setSearch(e.target.value)
    //     console.log(search)
    // }
    return (
            <div className="background-pic">
                <div className="online-search-input">
                    <h2>Find your Yummy recipes online</h2>
                    <InputGroup className="mb-3">
                        <Button 
                            id="online-search-btn" 
                            variant="success"
                    
                             
                        >
                            Search
                        </Button>
    
                        <FormControl
                            placeholder="Search for Yummy recipies"
                            
                            
                        />
                    </InputGroup>
                </div>
            </div>
    ) 

}
    // const [searchInput, setSearchInput] = useState('')

    // const hanldeSearchInput = (event) => {
    //     setSearchInput(event.target.value)
    // }

    // const handleSearch = (search) => {

    // }

    // return (
    //     <div className="background-pic">
    //         <div className="online-search-input">
    //             <h2>Find your Yummy recipes online</h2>
    //             <InputGroup className="mb-3">
    //                 <Button 
    //                     id="online-search-btn" 
    //                     variant="success"
    //                     onClick={handleSearch}  
    //                 >
    //                     Search
    //                 </Button>

    //                 <FormControl
    //                     placeholder="Search for Yummy recipies"
    //                     value={searchInput}
    //                     onChange={hanldeSearchInput}
    //                 />
    //             </InputGroup>
    //         </div>
    //     </div>
        
    // )
// }

export default OnlineRecipeSearch;
