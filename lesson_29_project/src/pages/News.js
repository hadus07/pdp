import React from 'react'
import { URL, TOKEN } from '../env'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import { universalWidth } from '../helper/constants'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import TablePagination from '@material-ui/core/TablePagination'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

const styles = {
    cont: {
        width: universalWidth,
        marginTop: 20,
    },
    pagination: {
        width: '95%',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    exp: {
        display: 'flex',
        flexDirection: 'column',
    }
}

class News extends React.Component {

    state = {
        news: [],
        count: 0,
        page_size: 5,
        page_number: 1,
    }

    componentDidMount() {
        this.getNews()
    }

    getNews = async () => {
        let res
        let url = `${URL}news?api_key=${TOKEN}&page_number=${this.state.page_number}&page_size=${this.state.page_size}&identifier=${this.props.location.state.ticker}`
        try {
            res = await fetch(url)
            res = await res.json()
            // console.log(res)
            this.setState({news: res.data, count: res.result_count})
        } catch(error) {
            console.log(error)
        }
    }

    onChangePage = page_number => {
        this.setState({page_number: page_number + 1}, () => {
            this.getNews()
            // console.log(page_number)
        })
    }

    onChangeRowsPerPage = page_size => {
        this.setState({page_size}, this.getNews)
    }

    render() {
        const { classes } = this.props
        return (
            <>
                {this.state.news.map(item => (
                    <ExpansionPanel className={classes.cont} key={item.figi}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.exp}>
                                <Typography variant='button'>{item.title}</Typography>
                                <Typography color='primary' variant='caption'>{item.publication_date}</Typography>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant="body2">{item.summary}</Typography>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <a href={item.url} className={classes.link}>
                                <Button size="small" color="primary">More</Button>
                            </a>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
                <TablePagination
                    {...this.state}
                    component='div'
                    page={this.state.page_number}
                    className={classes.pagination}
                    rowsPerPageOptions={[5, 7, 10]}
                    rowsPerPage={this.state.page_size}
                    page_number={this.state.page_number-1}
                    onChangePage={(event, page) => this.onChangePage(page)}
                    onChangeRowsPerPage={({ target }) => this.onChangeRowsPerPage(target.value)}
                />
            </>
        )
    }
}

export default withStyles(styles)(News)
