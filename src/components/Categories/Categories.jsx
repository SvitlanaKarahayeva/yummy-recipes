import "./Categories.css"

function Categories() {
    return (
        <div className="categories">
            <span className="catTitle">Choose Yummy's Category</span>
            <div className="categoryItems">
                <ul className="categoryList">
                    <li>Dinner</li>
                    <li>Lunch</li>
                    <li>Breakfast</li>
                    <li>Desert</li>
                </ul>
            </div>

        </div>
    )
}

export default Categories
