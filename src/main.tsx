import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import Home from './Home';
import POS from './POS';
import './demo-api';
import './style.css';
function App(){const [pos,S]=useState(location.hash==='#pos');useEffect(()=>{const update=()=>{S(location.hash==='#pos');if(location.hash==='#pos'||location.hash==='#home')window.scrollTo(0,0)};addEventListener('hashchange',update);return()=>removeEventListener('hashchange',update)},[]);return <><div style={{background:'#302a24',color:'#fff',fontSize:11,textAlign:'center',padding:8}}>CLIENT DEMO · Sample branding & prices · Data stays in this browser · No real payments</div>{pos?<POS/>:<Home/>}</>};
createRoot(document.getElementById('root')!).render(<App/>);
