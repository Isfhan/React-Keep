import { Button, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

function Note({ title, content, id, delNote }) {
  function clickHandler() {
    delNote(id);
  }
  return (
    <Paper style={{background: 'rgba(255, 255, 255, .3)', BoxShadow: '0 5px 10px rgba(0, 0, 0, .6)' , minWidth: "200px" , minHeight: "100px" , padding: "10px" , margin: "20px" , display: "inline-flex"}}>
        <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: '120px' }}>
        <DeleteIcon style={{ color: 'red'}} />
      </Button>
    </Paper>
  )
}

export default Note
