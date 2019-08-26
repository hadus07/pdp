import React from 'react'
import { URL, TOKEN } from '../env'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import { universalWidth } from '../helper/constants'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const styles = {
    cont: {
        width: universalWidth
    },
    title: {
        marginTop: 20,
    },
    indent: {
        marginLeft: 20,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
}

class Info extends React.Component {

    state = {
        info: null
    }

    componentDidMount() {
        this.getInfo()
    }

    getInfo = async () => {
        let url = `${URL}companies?api_key=${TOKEN}&identifier=${this.props.location.state.ticker}`
        let res
        try {
            res = await fetch(url)
            res = await res.json()
            // console.log(res)
            this.setState({info: res})
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { info } = this.state
        const { classes } = this.props
        return info !== null && (
            <Card className={classes.cont}>
                <CardContent>
                    <Title>Name</Title>
                    <Primary>{info.name}</Primary>
                    
                    <Title>Company Url</Title>
                    <Primary>{info.company_url}</Primary>

                    <Title>Phone</Title>
                    <Primary>{info.business_phone_no}</Primary>

                    <Title>CEO</Title>
                    <Primary>{info.ceo}</Primary>

                    <Title>Number of employees</Title>
                    <Primary>{info.employees}</Primary>

                    <Title>Address</Title>
                    <Secondary>
                        {`
                            ${info.hq_country}, 
                            ${info.hq_state}, 
                            ${info.hq_address_city}, 
                            ${info.hq_address1}, 
                            ${info.hq_address_postal_code}
                        `}
                    </Secondary>

                    <Title>Description</Title>
                    <Secondary>{info.long_description}</Secondary>
                </CardContent>
                <CardActions>
                    <Link
                        className={classes.link}
                        to={{
                            pathname: '/news',
                            state: { ticker: this.props.location.state.ticker }
                        }}
                    >
                        <Button size="small">News</Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

const Title = withStyles(styles)(props => (
    <Typography
        className={props.classes.title} 
        color="textSecondary"
        gutterBottom
    >
        {props.children}
    </Typography>
))

const Primary = withStyles(styles)(props => (
    <Typography
        variant="button"
        className={props.classes.indent}
    >
        {props.children}
    </Typography>
))

const Secondary = withStyles(styles)(props => (
    <Typography
        variant="body2"
        className={props.classes.indent}
    >
        {props.children}
    </Typography>
))


export default withStyles(styles)(Info)