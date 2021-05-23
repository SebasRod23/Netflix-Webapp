import React, { useEffect, useState} from 'react';
import ApexCharts from 'apexcharts';
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const chartCss = css({
  width: '100%',
  display: 'flex',
  minHeight: '57vh',
  flexDirection: 'column',
  alignContent: 'center',
  margin: '10px',
});
const chartc = css({
  alignSelf: 'center',
});

interface response {
  series: number[];
  labels: any[];
}
interface StatisticsProps {
  routeSearch: string;
}
let chart: any = false;

const Chart: React.FC<StatisticsProps> = ({ routeSearch }) => {
  const [finalRoute,setFinalRoute]=useState('general');
  const [info,setInfo]=useState({series:['1'],labels:['Select something']});
  useEffect(() => {
    if(routeSearch!=='country' && routeSearch!=='year'){
      setFinalRoute('general');
    }else{
      setFinalRoute(routeSearch)
    }
  },[routeSearch]);
  useEffect(()=>{
    const getData = async (): Promise<AxiosResponse<any>> => {
      console.log(finalRoute)
      try {
        const todos: AxiosResponse<any> = await axios.get(
          'http://localhost:3010/statistics/'+finalRoute,
        );
        setInfo(todos.data);
        return todos;
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  },[finalRoute])
  useEffect(()=>{
    const fetchData = async() => {
      //let info=getData();
      if(chart){
        await chart.destroy();
      }
      console.log(info)
      if (finalRoute === 'country') {
        chart = new ApexCharts(document.querySelector('#chart'), {
          series: [
            {
              data: info.series
            },
          ],
          chart: {
            type: 'bar',
            width: '600px',
            id: '1',
          },
          plotOptions: {
            bar: {
              columnWidth: '50%',
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: info.labels
          },
          tooltip: {
            theme: 'dark',
            y: {
              title: {
                formatter: function () {
                  return 'movies';
                },
              },
            },
          },
        });
      } else if (finalRoute === 'year') {
        console.log("yeaaaaar")
        chart = new ApexCharts(document.querySelector('#chart'), {
          series: [
            {
              data: info.series,
            },
          ],
          chart: {
            type: 'bar',
            width: '700px',
            id: '1',
          },
          plotOptions: {
            bar: {
              columnWidth: '50%',
              distributed: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: info.labels
          },
          tooltip: {
            theme: 'dark',
            y: {
              title: {
                formatter: function () {
                  return 'TV shows';
                },
              },
            },
          },
        });
      } else {
        chart = new ApexCharts(document.querySelector('#chart'), {
          series: info.series,
          chart: {
            id: '1',
            width: '500px',
            type: 'pie',
          },
          labels: info.labels,
          legend: {
            show: false,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 250,
                },
              },
            },
          ],
        });
      }
      await chart.render();
    };
    fetchData();
  },[info])
  return (
    <div css={chartCss}>
      <div id='chart' css={chartc}></div>
    </div>
  );
};

export default Chart;
