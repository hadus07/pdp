import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { universalWidth } from '../helper/constants'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = {
  search: { width: '90%' },
  input: {
    display: 'flex',
    padding: '10px 20px',
    width: universalWidth,
    justifyContent: 'space-between',
  },
  loader: {
    top: 0,
    width: '120%',
    marginLeft: -10,
    position: 'absolute',
  },
  paper: { overflow: 'hidden', position: 'relative' },
}

class Search extends React.Component {
  render() {
    const { classes, loading } = this.props
    return (
      <>
        <Paper className={classes.paper}>
          {loading && <LinearProgress className={classes.loader} />}
          <div className={classes.input}>
            <InputBase
                {...this.props}
                className={classes.search}
                placeholder="Search Companies"
            />
          <IconButton><SearchIcon /></IconButton>
          </div>
        </Paper>
      </>
    )
  }
}

export default withStyles(styles)(Search)
