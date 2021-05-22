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
    routeSearch:string
}
const SingleStatistics: React.FC<StatisticsProps> = ({ routeSearch }) => {
    const [label,setLabel]=useState('Not found')
    const [numLabel,setNumLabel]=useState('')
    
    const getSingleStats= async (route:string): Promise<AxiosResponse<any>> => {
        try {
            const numCountry: AxiosResponse<any> = await axios.get(
                'http://localhost:3010/'+route,
            );
            setLabel(numCountry.data.label)
            setNumLabel(numCountry.data.number)
            console.log(numCountry)
            return numCountry;
        } catch (error) {
            throw new Error(error);
        }
    };

    
    useEffect(() => {
        getSingleStats(routeSearch)
    },[routeSearch]);

    return (
        <div css={chartCss}>
            <h2>{label}</h2>
            <h3>{numLabel}</h3>
        </div>
        
    );
};
  
export default SingleStatistics;
