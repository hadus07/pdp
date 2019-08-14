import React from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { withStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteUser } from './store'

const User = props => {
  const { classes } = props
  const { picture, name, email, cell, login } = props
  return (
      <Paper className={classes.paper}>
        <Avatar
            src={picture.large}
            className={classes.avatar}
        />
        <div className={classes.infoCont}>
            <Typography variant='h5'>
                {`${name.title}. ${name.first} ${name.last}`}
            </Typography>
            <Typography variant='overline'>{email}</Typography>
            <Typography variant='button'>{cell}</Typography>
        </div>
        <IconButton onClick={() => deleteUser(login.uuid)}>
            <DeleteIcon />
        </IconButton>
    </Paper>
    )
}

export default withStyles(styles)(User)
