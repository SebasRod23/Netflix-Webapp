import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";

const chartCss = css({
        width: "100%",
        display: "flex",
        flexDirection:"column",
        alignContent: "center", 
        margin:"10px",
    
});
const customButton = css({
    width: "250px",
    minHeight: "50px",
    margin:"10px",
    alignSelf:"center",
    backgroundColor:"red"
}
);
const chartc = css({
    alignSelf:"center"
}
);

/*let chart = new ApexCharts(document.querySelector("#chart"), {
    series: [70,30],
    chart: {
        width: 500,
        type: 'pie',
    },
    labels: ['Movies', 'Series'],
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

  });*/
let chart =  new ApexCharts(document.querySelector("#chart"), {
    series: [70,30],
    chart: {
        width: 500,
        type: 'pie',
    },
    labels: ['Movies', 'Series'],
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
        chart: {
            width: 230
        }
        }
    }],
  });
const Chart: React.FC = () => {
    const [chartConfig, setChartConfig] = useState({
        series: [70,30],
        chart: {
            width: 500,
            type: 'pie',
        },
        labels: ['Movies', 'Series'],
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
      } as {
        series: number[],
        chart: {
            width:number,
            type: string,
        },
        labels: string[],
        legend: {
            show: false
        }
        responsive: [{
            breakpoint: number,
            options: {
            chart: {
                width: number
            }
            }
        }],
      });
    useEffect(() => {
        /*chart.updateOptions({
            chartConfig
        });*/
        //
        if(chart){
            chart =  new ApexCharts(document.querySelector("#chart"), chartConfig) 
        }
        chart.render();
    });
    const changeValues=()=>{
        chart.updateOptions({
            series:[90,10],
            labels:["A","B"]
        });
        //setChartConfig({...chartConfig,series:[90,10,20],labels:["A","B","C"]});
    }

    return (
        <div css={chartCss}>
            <div id="chart"  css={chartc}>
            </div>
            <input type="button" value="Change!" onClick={changeValues} css={customButton} />
        </div>
        
    );
};
  
export default Chart;