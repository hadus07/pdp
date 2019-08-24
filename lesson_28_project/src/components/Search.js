import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  paper: {
    width: '60vw',
    display: 'flex',
    marginTop: '5vh',
    padding: '10px 20px',
    justifyContent: 'space-between',
  },
  search: { width: '90%' },
}

class Search extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.paper}>
        <InputBase
            {...this.props}
            className={classes.search}
            placeholder="Search Companies"
        />
        <IconButton><SearchIcon /></IconButton>
      </Paper>
    )
  }
}

export default withStyles(styles)(Search)
