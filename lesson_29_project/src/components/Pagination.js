import React from 'react'
import { withStyles } from '@material-ui/styles'
import TablePagination from '@material-ui/core/TablePagination'

const styles = {
    pagination: {
        width: '95%',
    },
}

export default withStyles(styles)(props => (
    <TablePagination
        {...props}
        component='div'
        page={props.page_number}
        rowsPerPage={props.page_size}
        className={classes.pagination}
        rowsPerPageOptions={[5, 7, 10]}
        onChangePage={(event, page) => this.props.onChangePage(page)}
    />
))