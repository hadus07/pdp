import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/styles'
import MaterialList from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Pagination from '../components/Pagination'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

const styles = {
    cont: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    listCont: { width: '100%' },
    link: { color: 'inherit', textDecoration: 'none' }
}

class List extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.cont}>
                <MaterialList className={classes.listCont}>
                    {this.props.companies.map(company => (
                        <Link
                            key={company.ticker}
                            className={classes.link}
                            to={{
                                pathname: '/info',
                                state: { ticker: company.ticker }
                            }}
                        >
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Typography variant='button'>
                                            {company.name[0]}
                                        </Typography>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={company.name}
                                    secondary={company.ticker}
                                />
                            </ListItem>
                        </Link>
                    ))}
                </MaterialList>
                <Pagination
                    {...this.props}
                    page={this.props.page_number}
                    rowsPerPage={this.props.page_size}
                    onChangePage={page => this.props.onChangePage(page)}
                />
            </div>
        )
    }
}

export default withStyles(styles)(List)