const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json())
const port = 4000


  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
    headers: {
      'X-RapidAPI-Key': '5f44c940d7msh9746859e8096857p1cabf8jsn920020153c22',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };


  async function makeApiRequest() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  makeApiRequest()
  app.listen(port, () =>{
   console.log("estaa execuntando ")
 
})
app.get('/v1/geo/adminDivisions', async (req, res) => {
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
