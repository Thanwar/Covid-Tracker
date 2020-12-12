import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import NumberFormat from "react-number-format";
import './Cards.css';

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className="cardsContainer">
      <Grid container spacing={3} justify="center">
        
        <Grid item component={Card} xs={12} md={3} className="cardsClass" id="confirmed">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Confirmed Cases
            </Typography>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={confirmed.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography  color="textSecondary" variant="body2" gutterBottom>
               updated on : {new Date(lastUpdate).toDateString()}  
            </Typography>
          </CardContent>
          </Grid>


          <Grid item component={Card} xs={12} md={3} className="cardsClass" id="Recovered">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recovered Cases
            </Typography>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={recovered.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography color="textSecondary" variant="body2" gutterBottom>
               updated on : {new Date(lastUpdate).toDateString()}  
            </Typography>
          </CardContent>
          </Grid>


          <Grid item component={Card} xs={12} md={3} className="cardsClass" id="Deaths">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Deaths
            </Typography>
            <Typography  variant="h4" gutterBottom>
              <NumberFormat
                value={deaths.value}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
            <Typography color="textSecondary" variant="body2" gutterBottom>
               updated on : {new Date(lastUpdate).toDateString()}  
            </Typography>
          </CardContent>
        </Grid>



      </Grid>
    </div>
  );
}
