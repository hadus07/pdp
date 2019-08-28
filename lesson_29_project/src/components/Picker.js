import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'

const Picker = props => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            autoOk
            {...props}
            disableToolbar
            margin="normal"
            variant="inline"
            format="MM/dd/yyyy"
        />
    </MuiPickersUtilsProvider>
)

export default Picker