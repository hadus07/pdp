import React from 'react'
import { URL, TOKEN } from '../env'
import List from '../components/List'
import Search from '../components/Search'

class Home extends React.Component {

    state = {
        count: 0,
        query: '',
        page_size: 5,
        companies: [],
        page_number: 1,
        loading: false,
    }

    componentDidMount() {
        this.getCompanies()
    }

    getCompanies = async () => {
        let res
        let url = `${URL}companies?api_key=${TOKEN}&page_number=${this.state.page_number}&page_size=${this.state.page_size}&query=${this.state.query}`
        try {
            this.setState({loading: true}, async () => {
                res = await fetch(url)
                res = await res.json()
                // console.log(res)
                this.setState({
                    loading: false,
                    companies: res.data,
                    count: res.result_count,
                })
            })
        } catch(error) {
            console.log(error)
        }
    }

    onChangePage = page_number => {
        this.setState({page_number: page_number + 1}, this.getCompanies)
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
                <Search
                    value={this.state.query}
                    onChange={this.onSearch}
                    loading={this.state.loading}
                />
                <List
                    {...this.state}
                    page_number={this.state.page_number-1}
                    onChangePage={page => this.onChangePage(page)}
                    onChangeRowsPerPage={({ target }) => 
                        this.onChangeRowsPerPage(target.value)
                    }
                />
            </>
        )
    }
}

export default Home
