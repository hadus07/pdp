import React from 'react'
import { URL, TOKEN } from '../env'
import List from '../components/List'
import Search from '../components/Search'

class Home extends React.Component {

    state = {
        page_number: 1,
        companies: [],
        page_size: 5,
        count: 0,
        query: '',
    }

    componentDidMount() {
        this.getCompanies()
    }

    getCompanies = async () => {
        let res
        let url = `${URL}companies?api_key=${TOKEN}&page_number=${this.state.page_number}&page_size=${this.state.page_size}&query=${this.state.query}`
        try {
            res = await fetch(url)
            res = await res.json()
            // console.log(res)
            this.setState({companies: res.data, count: res.result_count})
        } catch(error) {
            console.log(error)
        }
    }

    onChangePage = page_number => {
        this.setState({page_number: page_number + 1}, () => {
            this.getCompanies()
            console.log(page_number)
        })
    }

    onChangeRowsPerPage = page_size => {
        this.setState({page_size}, this.getCompanies)
    }

    onSearch = ({ target }) => {
        this.setState({query: target.value, page_number: 1}, this.getCompanies)
    }

    render() {
        return (
            <>
                <Search value={this.state.query} onChange={this.onSearch} />
                <List
                    {...this.state}
                    page_number={this.state.page_number-1}
                    onChangePage={page => this.onChangePage(page)}
                    onChangeRowsPerPage={({ target }) => this.onChangeRowsPerPage(target.value)}
                />
            </>
        )
    }
}

export default Home
