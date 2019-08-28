import React from 'react'
import { withStyles } from '@material-ui/styles'
import TablePagination from '@material-ui/core/TablePagination'

const styles = { pagination: { width: '95%' } }

export default withStyles(styles)(props => (
    <TablePagination
        {...props}
        component='div'
        page={props.page}
        count={props.count}
        rowsPerPage={props.rowsPerPage}
        rowsPerPageOptions={[5, 7, 10]}
        className={props.classes.pagination}
        onChangeRowsPerPage={props.onChangeRowsPerPage}
        onChangePage={(event, page) => props.onChangePage(page)}
    />
))