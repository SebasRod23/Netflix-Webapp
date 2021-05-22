import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const chartCss = css({
  width: '100%',
  display: 'flex',
  minHeight: '48.7vh',
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
  const [type, setType] = useState(routeSearch);
  const getTodos = async (): Promise<AxiosResponse<any>> => {
    try {
      const todos: AxiosResponse<any> = await axios.get(
        'http://localhost:3010/statistics/',
      );
      console.log(todos);
      let chartTodo: response = await todos.data;
      console.log(chartTodo.labels);
      chart = new ApexCharts(document.querySelector('#chart'), {
        series: chartTodo.series,
        chart: {
          id: 'mychart',
          width: '500px',
          type: 'pie',
        },
        labels: chartTodo.labels,
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
      chart.render();
      return todos;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCountry = async (): Promise<AxiosResponse<any>> => {
    try {
      const dataCountry: AxiosResponse<any> = await axios.get(
        'http://localhost:3010/statistics/country',
      );
      let chartTodo: response = await dataCountry.data;
      chart = new ApexCharts(document.querySelector('#chart'), {
        series: [
          {
            data: chartTodo.series,
          },
        ],
        chart: {
          type: 'bar',
          width: '600px',
          id: 'mychart',
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
          categories: chartTodo.labels,
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

      chart.render();
      return dataCountry;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getYear = async (): Promise<AxiosResponse<any>> => {
    try {
      const dataYear: AxiosResponse<any> = await axios.get(
        'http://localhost:3010/statistics/year',
      );
      let chartTodo: response = await dataYear.data;
      chart = new ApexCharts(document.querySelector('#chart'), {
        series: [
          {
            data: chartTodo.series,
          },
        ],
        chart: {
          type: 'bar',
          width: '700px',
          id: 'mychart',
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
          categories: chartTodo.labels,
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
      chart.render();
      return dataYear;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      if (chart) {
        chart.destroy();
      }
      if (type === 'country/') {
        getCountry();
      } else if (type === 'year/') {
        getYear();
      } else {
        getTodos();
      }
    };
    fetchData();
  }, [type]);

  return (
    <div css={chartCss}>
      <div id='chart' css={chartc}></div>
    </div>
  );
};

export default Chart;
