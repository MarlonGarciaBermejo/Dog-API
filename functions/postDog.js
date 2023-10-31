const {sendResponse} = require('../responses/index');

function checkBodyFormat(body) {
    const keys = Object.keys(body);


    if (body?.id && body?.name && body?.age && body?.breed && keys.length === 3) {
        return true;
    } else {
        return false;
    }
}

function postDog(dogs, body) {
    if (checkBodyFormat(body)) {
        dogs.push(body);
      
        return sendResponse(200, { dogs });
    }
    else {
        return sendResponse(400, { message: "Wrong data in body" });

    }

}

module.exports = { postDog }