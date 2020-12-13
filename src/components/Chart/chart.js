import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar } from "react-chartjs-2";
import './chart.css';




export default function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [Dailydata, setDailydata] = useState([]);

  useEffect(() => {
    const FetchApi = async () => {
      setDailydata(await fetchDailyData());
    };

    FetchApi();
    //console.log("Charts==> ", Dailydata);
  },[]);

  const LineChart = (Dailydata.length ? (
    <Line
      data={{
        labels: Dailydata.map(({ date }) => date),
        datasets: [
          {
            data: Dailydata.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            borderColor: "red",
            backgroundColor: 'rgba(255,0,0,0.5)',

            fill: true,
          },

          {
            data: Dailydata.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "blue",
            backgroundColor: 'rgba(0,0,255,0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null);


  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );



  return (
            <div className="chart">
                {country ? barChart : LineChart}
            </div>
            
        );
}
