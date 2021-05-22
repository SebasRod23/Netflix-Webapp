import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
/** @jsxImportSource @emotion/react */ import { css } from '@emotion/react';

const chartCss = css({
    width: '100%',
    minHeight: '48.7vh',
    display: 'flex',
    flexDirection:'column',
    alignContent: 'center', 
    justifyContent:'center',
    margin:'10px',
    'h2':{
        alignSelf:'center',
        marginBottom:'20px'
    },
    'h3':{
        alignSelf:'center',
        margin:'20px',
        color:'#781c16',
        fontWeight: 500,
    }
});

interface StatisticsProps{
    type:string,
    input:string
}
const SingleStatistics: React.FC<StatisticsProps> = ({ type,input }) => {
    const [label,setLabel]=useState(type)
    const [numLabel,setNumLabel]=useState()
    
    const getPerCountry= async (country:string): Promise<AxiosResponse<any>> => {
        try {
            const numCountry: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/country/'+country,
            );
            setLabel(country)
            setNumLabel(numCountry.data)
            console.log(numCountry)
            return numCountry;
        } catch (error) {
            throw new Error(error);
        }
    };

    const getPerYear= async (yearNum:number): Promise<AxiosResponse<any>> => {
        try {
            const year: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/statistics/year/'+yearNum,
            );
            setLabel(yearNum.toString())
            setNumLabel(year.data)
            return year;
        } catch (error) {
            throw new Error(error);
        }
    };
    useEffect(() => {
        if(type==='country'){
            getPerCountry(input)
        }else{
            let yearNum:number=+input
            getPerYear(yearNum)
        } 
    },[type]);

    return (
        <div css={chartCss}>
            <h2>{label}</h2>
            <h3>{numLabel}</h3>
        </div>
        
    );
};
  
export default SingleStatistics;
