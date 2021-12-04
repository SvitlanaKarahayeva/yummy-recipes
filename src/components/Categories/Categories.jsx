import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import categoryService from '../../services/categoryService';
import "./Categories.css"

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async ()=> {
            const res = await categoryService.getCategories()
            // console.log(res)
            setCategories(res.data)
        }
        getCategories()
    }, [])

    return (
        <div className="categories">
            <span className="catTitle">Choose Yummy's Category</span>
            <div className="categoryItems">
                <ul className="categoryList">
                    { categories?.map( (cat, idx) => (
                        <Link to={`api/recipes?category=${cat.name}`} key={idx}>
                            <li className="link">{ cat.name }</li>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Categories
