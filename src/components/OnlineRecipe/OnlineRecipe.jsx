import React from 'react';
import { Card, Button } from 'react-bootstrap';

function OnlineRecipe(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ props.recipe.strMealThumb } />
                <Card.Body>
                    <Card.Title> {props.recipe.strMeal} </Card.Title>
                    <Card.Text>
 
                    </Card.Text>
                    <Button variant="info">See more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OnlineRecipe;