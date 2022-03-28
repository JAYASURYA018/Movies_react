import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react'
import './App.css';


function TicTacToe() {
  const [ player, changePlayer ] = useState(true);
  var initialValues = [ null, null, null, null, null, null, null, null, null ];
  const [ values, setValues ] = useState(initialValues);
  const findWinner = (data)=>{
    const winningProbabilities = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let arr of winningProbabilities){
      var [a,b,c] = arr;
      if(data[a]!=null & data[a]===data[b] & data[b]===data[c] ){
        return data[a]
      }else if(data[0]!=null && data[1]!=null && data[2]!=null && data[3]!=null && data[4]!=null && data[5]!=null && data[6]!=null && data[7]!=null && data[8]!=null){
        return "Draw";
      }
    }return null;
  };
  const win = findWinner(values);


  const handleClick=(index)=>{
    if (values[index] === null && win===null) {
      var cpyValues = [ ...values ];
      cpyValues[ index ] = player ? "X" : "O"
      setValues(cpyValues);
      changePlayer(!player)
    }
  }
  return (
    <section className='entiregame'>
      <h1>Tic - Tac - Toe</h1>
      <div className={win===null?'boxes':'boxes end'}>
        {values.map((value, index) =>
          <div
            onClick={() => handleClick(index)}
            key={index}
            className='box'>
            {value}
          </div>)}
      </div>
      <br></br>
      {win?<div className='black'>{win} {win==="Draw"?'':"won"}</div>:<></>}
      <br></br>
      <Button onClick={()=>{ setValues(initialValues); }} variant="contained" href="#contained-buttons">
        <RestartAltIcon/>Restart
      </Button>
    </section>
  )
}

export default TicTacToe
