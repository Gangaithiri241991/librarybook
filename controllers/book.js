import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllBook(req){
    return client 
     .db("taskmon3")
    .collection("book")
    .find(req.query)
    .toArray();
}

export function getBookById(id){
    return client
    .db("taskmon3")
    .collection("book")
    .findOne({_id: new ObjectId(id)})
}

export function addBookData(data){
  return client
  .db("taskmon3")
  .collection("book")
  .insertOne(data)

}

export function updateBookData(id, updatedData){
    return client
    .db("taskmon3")
    .collection("book")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deletaBookData(id){
    return client
  .db("taskmon3")
  .collection("book")
  .deleteOne({_id: new ObjectId(id)})
}


















 