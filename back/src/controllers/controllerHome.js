const getHome = (req, res) => {
    res
        .status(200)
        .send(" estas en la ruta GET '/' de Movies");
};

const postHome = (req, res) => {
    res
        .status(200)
        .send(" estas en la ruta POST '/' de Movies");
};




module.exports = {
    getHome,
    postHome
}