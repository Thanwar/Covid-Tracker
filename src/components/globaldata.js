import React from "react";
import { useEffect, useState }from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
}));

const useStylestypography = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

export default function Globaldata() {
  const classes = useStyles();
  const classestypography = useStylestypography();
  const [globalData, setstaglobalData] = useState();
  const [dataLoading, setdataLoading] = useState(false);


  useEffect(() => {
    async function fetchGlobalData(){
      setdataLoading(true)
      const apiResponse = await fetch('https://disease.sh/v3/covid-19/all')
      const dataFromApi = await apiResponse.json();
      console.log(dataFromApi);
      setstaglobalData(dataFromApi);
      setdataLoading(false)

    }

    fetchGlobalData();
  }, [])

  const Loading = "Loading";

  if(dataLoading)
  {
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classestypography.root} style={{color: 'blue'}}>
            <Typography variant="h4" gutterBottom>
              {Loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Total Cases
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classestypography.root} style={{color: 'red'}}>
            <Typography variant="h4" gutterBottom>
            {Loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom >
            Active
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classestypography.root} style={{color: 'green'}}>
            <Typography variant="h4" gutterBottom>
            {Loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Recovered
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classestypography.root} style={{color: 'grey'}}>
            <Typography variant="h4" gutterBottom>
            {Loading}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
            Deaths
            </Typography>
          </div>
        </Paper>
      </div>
  )
  }



  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classestypography.root} style={{color: 'blue'}}>
          <Typography variant="h4" gutterBottom>
          <NumberFormat value={globalData && globalData.cases} displayType={'text'} thousandSeparator={true} />
          </Typography>
          <Typography variant="h5" gutterBottom>
            Total Cases
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classestypography.root} style={{color: 'red'}}>
          <Typography variant="h4" gutterBottom>
          <NumberFormat value={globalData && globalData.active} displayType={'text'} thousandSeparator={true} />
          </Typography>
          <Typography variant="h5" gutterBottom >
          Active
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classestypography.root} style={{color: 'green'}}>
          <Typography variant="h4" gutterBottom>
          <NumberFormat value={globalData && globalData.recovered} displayType={'text'} thousandSeparator={true} />
          </Typography>
          <Typography variant="h5" gutterBottom>
          Recovered
          </Typography>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div className={classestypography.root} style={{color: 'grey'}}>
          <Typography variant="h4" gutterBottom>
          <NumberFormat value={globalData && globalData.deaths} displayType={'text'} thousandSeparator={true} />
          </Typography>
          <Typography variant="h5" gutterBottom>
          Deaths
          </Typography>
        </div>
      </Paper>


    </div>
  );
}
