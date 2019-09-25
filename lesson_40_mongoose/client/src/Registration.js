import React from 'react'
import './Registration.css'

export default class Registration extends React.Component {

    state = {
        username: '',
        name: '',
        gender: 'male',
        age: '',
        image: '',
        password: '',
    }

    handleImageUpload = target => {
        let reader = new FileReader()

        reader.onload = e => {
            this.setState({ image: e.target.result })
        }
        reader.readAsBinaryString(target.files[0])
    }

    handleChange = target => {
        this.setState({ [target.name]: target.value })
    }

    submit = async e => {
        e.preventDefault()
        // console.log(this.state)
        // console.log(JSON.parse(JSON.stringify(this.state)))
        let res
        try {
            res = await fetch('http://localhost:2222/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })

            res = await res.json()
            console.log(res)
        } catch(err) {
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={({target}) => this.handleChange(target)}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={({target}) => this.handleChange(target)}
                />
                <select
                    name="gender"
                    onChange={({target}) => this.handleChange(target)}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={this.state.age}
                    onChange={({target}) => this.handleChange(target)}
                />
                <input
                    type="file"
                    name="image"
                    placeholder="Image"
                    // value={this.state.image}
                    onChange={({target}) => this.handleImageUpload(target)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={({target}) => this.handleChange(target)}
                />

                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
