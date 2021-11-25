

function index(req, res) {
    console.log("express server is running")
    res.send(" This is  index recipes page")
}

module.exports = {
    index,
}