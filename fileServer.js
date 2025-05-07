const mongoose=require("mongoose")

    const express = require('express');
    const fs = require('fs');
    const path = require('path');
    const app = express();
    
     app.get("", () => {
      
    });
    
    app.get("", () => {
      
    });
    
    app.get("*", (req, res) => {
      res.status(404).send("Route not found");
    });
    

