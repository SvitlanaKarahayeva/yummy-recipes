import React from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import './OnlineRecipeSearch.css';

function OnlineRecipeSearch() {
    return (
        <div className="background-pic">
            <div className="online-search-input">
                <InputGroup className="mb-3">
                    <Button id="online-search-btn" variant="success">
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

export default OnlineRecipeSearch;
