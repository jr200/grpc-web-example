import React, { useState } from 'react';

import './App.css';

import { InventoryRequest } from "./streaming_pb.js";
const {ShopClient} = require('./streaming_grpc_web_pb.js');

var client = new ShopClient('http://127.0.0.1:50051');
var request = new InventoryRequest();
request.setItemName("apples");
var stream = client.subscribeInventory(request, {});


function App() {
  
  const [itemData, setItemData] = useState();
  const [timeData, setTimeData] = useState();
  const [quantityData, setQuantityData] = useState();

  stream.on('data', function(response) {
    setItemData(response.getItemName());
    setTimeData(response.getTime());
    setQuantityData(response.getQuantity());
  });


  return (
    <div className="App">
      <h1>Streaming gRPC-web</h1>
      <div>item_name: {itemData}</div>
      <div>time: {timeData}</div>
      <div>quantity: {quantityData}</div>
    </div>
  );
}

export default App;
