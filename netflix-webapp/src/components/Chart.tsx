import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";

const chartCss = css({
    width: "100%",
    display: "flex",
    flexDirection:"column",
    alignContent: "center", 
    margin:"10px",

});
const chartc = css({
alignSelf:"center"
}
);
const chartConfig = {
    series: [100],
    chart: {
        id: 'mychart',
        width: 500,
        type: 'pie',
    },
    labels: ['all'],
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 250
        }
        }
    }],
};
interface response{
    series:number[],
    labels:any[]
}
let chart:any=false
const Chart: React.FC = () => {
    const [label,setLabel]=useState({})
    const [type,setType]=useState("")
    const getTodos = async (): Promise<AxiosResponse<any>> => {
        try {
            const todos: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/all',
            )
            console.log(todos)
            let chartTodo:response = await todos.data
            console.log(chartTodo.labels)
            ApexCharts.exec('mychart', 'updateOptions', {
                series: chartTodo.series,
                chart: {
                    id: 'mychart',
                    width: '500px',
                    type: 'pie',
                },
                labels: chartTodo.labels,
                legend: {
                    show: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                    chart: {
                        width: 250
                    }
                    }
            }]});
            return todos;
        } catch (error) {
            throw new Error(error);
        }
    };
    const getCountry= async (): Promise<AxiosResponse<any>> => {
        try {
            const dataCountry: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/country',
            );
            let chartTodo:response=await dataCountry.data
            await ApexCharts.exec('mychart','updateOptions',{
                series: [{
                    data: chartTodo.series
                }],
                chart: {
                    type: 'bar',
                    width:'600px'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: chartTodo.labels
                }
            })
            return dataCountry;
        } catch (error) {
            throw new Error(error);
        }
    };
    const getPerCountry= async (country:string): Promise<AxiosResponse<any>> => {
        try {
            const numCountry: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/country/'+country,
            );
            setLabel(numCountry)
            return numCountry;
        } catch (error) {
            throw new Error(error);
        }
    };
    const getYear= async (): Promise<AxiosResponse<any>> => {
        try {
            const dataYear: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/year',
            );
            let chartTodo:response=await dataYear.data
            await ApexCharts.exec('mychart','updateOptions',{
                series: [{
                    data: chartTodo.series
                }],
                chart: {
                    type: 'bar',
                    width:'700px'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: chartTodo.labels
                }
            })
            return dataYear;
        } catch (error) {
            throw new Error(error);
        }
    };
    const getPerYear= async (yearNum:number): Promise<AxiosResponse<any>> => {
        try {
            const year: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/year/'+yearNum,
            );
            setLabel(year)
            return year;
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
        if(!chart){
            chart =  new ApexCharts(document.querySelector("#chart"), chartConfig)  
            chart.render();
        }
        if(type==="country"){
            getCountry()
        }else if(type==="year"){
            getYear()
        } else{
            getTodos()
        }
    },[type]);


    return (
        <div css={chartCss}>
            <div id="chart"  css={chartc}>
            </div>
            <button onClick={()=>setType("all")}>all</button>
            <button onClick={()=>setType("country")}>country</button>
            <button onClick={()=>setType("year")}>year</button>
        </div>
        
    );
};
  
export default Chart;
