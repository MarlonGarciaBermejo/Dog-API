const {sendResponse} = require('./responses/index');
const {postDog} = require('./functions/postDog');
const {getDogById} = require('./functions/getDogById');

var dogs = [
    {breed: "Golden Retriever", age: 3, color: "Golden", weight: 70},
    {breed: "Labrador Retriever", age: 2, color: "Black", weight: 65},
    {breed: "German Shepherd", age: 4, color: "Sable", weight: 80},
    {breed: "Bulldog", age: 5, color: "White", weight: 50},
    {breed: "Poodle", age: 1, color: "Apricot", weight: 45},
    {breed: "Beagle", age: 2, color: "Tri-color", weight: 25},
    {breed: "Dachshund", age: 2, color: "Red", weight: 12},
    {breed: "Rottweiler", age: 3, color: "Black and Tan", weight: 95},
    {breed: "Siberian Husky", age: 2, color: "Gray", weight: 55},
    {breed: "Boxer", age: 3, color: "Fawn", weight: 65}

]

exports.handler = async (event, context) => {
    const { method, path } = event.requestContext.http;


    if (method === "GET" && path === "/dogs") {
        return sendResponse(200, { dogs });

    } else if (method === "GET" && path.startsWith("/dogs/")) {
        const id = path.split("/dogs/")[1];
        
        return getDogById(dogs, id);
      
    }


    else if (method === "POST" && path === "/dogs") {
        const body = JSON.parse(event.body);

       return postDog(dogs, body);

    }

    return sendResponse(404, { message: "ERROR" });

}