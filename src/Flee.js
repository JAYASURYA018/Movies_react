import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import RefreshIcon from '@mui/icons-material/Refresh';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';

import './App.css';


function Flee() {
    const [ unmai, setUnmai ] = useState(false);
    const [ ans, setAns ] = useState(false);
    const [ love, setLove ] = useState(false);

    const [ yn, syn ] = useState(null)
    const [ pn, spn ] = useState(null)
    
    return (
        <>
            <div className='flame'>
                {ans ?<Love setUnmai={setUnmai} setAns={setAns} setlove={setLove} yn={yn} pn={pn} syn={syn} spn={spn} /> : 
                    <>{unmai ? 
                        <><h4>unmaiya sonna feel pannuva..poiyae soldren</h4>
                        <IconButton color="primary" aria-label="Go" component="span">
                        <FastForwardRoundedIcon onClick={() => setAns(true)} />
                        </IconButton></> : 
                            <>{love ? 
                                    <Ques setAns={setAns} setUnmai={setUnmai}/> : 
                                        <Check pn={pn} yn={yn} setlove={setLove} syn={syn} spn={spn} />}</>}</>}
            </div>
        </>
    )
}

export default Flee;



function Love({ yn, pn, setlove, syn, spn, setUnmai, setAns }) {
    const { width, height } = useWindowSize();
    return (
        <>
            <h4>Relationship between " {yn} " and " {pn} " is</h4>
            <h1 style={{ color: "crimson", marginTop: "-3px", fontFamily: "sans-serif" }}>LOVE</h1>
            <Confetti width={width} height={height} />
            <IconButton onClick={() => { setlove(false); setAns(false); setUnmai(false); syn(null); spn(null); }} style={{ marginTop: "50px" }} color="primary" aria-label="Go" component="span">
                <RefreshIcon />
            </IconButton>
        </>
    )
}
function Check({ setlove, syn, spn, pn, yn }) {


    return (
        <>
            <TextField onChange={(event) => { syn(event.target.value) }} id="standard-basic" label="Your name" variant="standard" /> <br></br>
            <TextField onChange={(event) => { spn(event.target.value) }} id="standard-basic" label="Your parther's name" variant="standard" />
            {yn && pn ? <><IconButton onClick={() => { setlove(true) }} style={{ marginTop: "50px" }} color="primary" aria-label="Go" component="span">
                <FavoriteIcon />
            </IconButton></> : <><IconButton style={{ marginTop: "50px" }} color="primary" aria-label="Go" component="span">
                <FavoriteBorderOutlinedIcon />
            </IconButton></>}

        </>
    )
}

function Ques({ setUnmai, setAns }) {
    return (
        <>
            <Button onClick={() => { setUnmai(true) }} variant="outlined">Unmaiya sollava?</Button>
            <br></br>
            <Button onClick={() => { setAns(true) }} variant="outlined">poi sollava?</Button>
        </>
    )
}
