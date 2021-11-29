function index(req, res) {
    console.log("EXPRESS server is running on receipes index page")
    let recipes = [1,2,3,4]
    res.json(recipes)
    console.log(recipes)
}

module.exports = {
    index,
}