import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { withStyles } from '@material-ui/styles'
import { observer } from 'mobx-react'
import { getAll, getMales } from './store'

class Info extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.extraInfoCont} >
                <Typography variant='button'>
                    Jami: {getAll()}
                </Typography>
                <Typography variant='button'>
                    Ayollar: {getAll() - getMales()}
                </Typography>
                <Typography variant='button'>
                    Erkaklar: {getMales()}
                </Typography>
            </Paper>
        )
    }
}

export default withStyles(styles)(observer(Info))