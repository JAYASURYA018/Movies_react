import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react'
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function TicTacToe() {
  





  const { width, height } = useWindowSize();
  console.log(width,height);
  const [ player, changePlayer ] = useState(true);
  var initialValues = [ null, null, null, null, null, null, null, null, null ];
  // var initialValues = [ 0,1, 2, 3, 4, 5, 6, 7, 8];
  const [ values, setValues ] = useState(initialValues);
  const findWinner = (data) => {
    const winningProbabilities = [
      [ 0, 1, 2 ],
      [ 3, 4, 5 ],
      [ 6, 7, 8 ],
      [ 0, 3, 6 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 0, 4, 8 ],
      [ 6, 4, 2 ],
    ]

    for (let arr of winningProbabilities) {
      var [ a, b, c ] = arr;
      if (data[ a ] && data[ a ] === data[ b ] && data[ b ] === data[ c ]) {
        return data[ a ]
      } else if (data.every(element => element!=null)) {
        return "Draw";
      }
    } return null;
  };
  const win = findWinner(values);


  const handleClick = (index) => {
    if (values[ index ] === null && win === null) {
      var cpyValues = [ ...values ];
      cpyValues[ index ] = player ? "X" : "O"
      setValues(cpyValues);
      changePlayer(!player)
    }
  }
  return (
    <section className='entiregame'>
      <h4>Tic - Tac - Toe</h4>
        <div className={win === null ? 'boxes' : 'boxes end'}>
          {values.map((value, index) =>
            <div
              onClick={() => handleClick(index)}
              key={index}
              className='box'>
              {value}
            </div>)}
        </div>
        <br></br>
        {win ? <div className='black zoomin'>{win} {win === "Draw" ? '' : "won"}</div> : <></>}
        {win ? win !== "Draw" ? <Confetti
          width={width}
          height={height}
        /> : "" : ""}
        <br></br>
        <Button onClick={() => { setValues(initialValues); changePlayer(true); }} variant="contained">
          <RestartAltIcon />Restart
        </Button>
    </section>
  )
}

export default TicTacToe
