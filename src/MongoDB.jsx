import React from 'react'
import mongoose from 'mongoose';
function MongoDB() {
    const uri = 'mongodb://localhost:27017';
    const client = new mongoose(uri);
    client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
  return (
    <div>
    </div>
  )
}

export default MongoDB;