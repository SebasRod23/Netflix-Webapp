import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const chartCss = css({
  width: '100%',
  display: 'flex',
  minHeight: '54vh',
  flexDirection: 'column',
  alignContent: 'center',
  margin: '10px',
});
const chartc = css({
  alignSelf: 'center',
});

interface StatisticsProps {
  routeSearch: string;
}
let chart: any = false;

const Chart: React.FC<StatisticsProps> = ({ routeSearch }) => {
  const [finalRoute, setFinalRoute] = useState('general');
  const [info, setInfo] = useState({
    series: [1],
    labels: [1],
  });
  useEffect(() => {
    if (routeSearch !== 'country' && routeSearch !== 'year') {
      setFinalRoute('general');
    } else {
      setFinalRoute(routeSearch);
    }
  }, [routeSearch]);

  useEffect(() => {
    const getData = async (): Promise<AxiosResponse<any>> => {
      try {
        const todos: AxiosResponse<any> = await axios.get(
          'http://localhost:8080/statistics/' + finalRoute,
        );
        setInfo(todos.data);
        return todos;
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [finalRoute]);

  useEffect(() => {
    const fetchData = async () => {
      if (chart) {
        await chart.destroy();
      }
      if (finalRoute === 'country') {
        chart = new ApexCharts(document.querySelector('#chart'), {
          series: [
            {
              data: info.series,
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
            categories: info.labels,
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
            categories: info.labels,
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
  }, [info]);
  return (
    <div css={chartCss}>
      <div id='chart' css={chartc}></div>
    </div>
  );
};

export default Chart;
