const {sendResponse} = require('../responses/index');


function getDogById(dogs, id) {
    const dogIdInt =  parseInt(id);

    const dog = dogs.find((dog) => dog.id === dogIdInt);

    if (dog) {
        return sendResponse(200, { dog });
    } else {
        return sendResponse(404, { message: "Dog not found" });
    }
}


module.exports = { getDogById }