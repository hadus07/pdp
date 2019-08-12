import React from 'react'
import '../styles/Select.css'

export default class Select extends React.Component {
    
    state = {
        selected: null,
        isDropdownVisible: false,
    }

    handleClick = () => {
        this.setState({ isDropdownVisible: !this.state.isDropdownVisible })
    }

    handleSelect = selected => {
        this.setState(
            { selected, isDropdownVisible: false },
            () => {
                this.props.onSelect(this.state.selected)
            },
        )
    }

    handleClose = () => {
        this.setState({ isDropdownVisible: false })
    }

    render() {
        const { selected, isDropdownVisible } = this.state
        const { placeholder, list, displayProp, keyProp } = this.props
        return (
            <>
                <div className="cont">
                <div
                    className={`
                        input
                        ${!selected ? ' placeholder' : ''}
                        ${!isDropdownVisible ? ' alone' : ''}
                    `}
                    onClick={this.handleClick}
                >
                    {!selected ? placeholder : selected[displayProp]}
                </div>
                {isDropdownVisible && (
                    <div className="dropdownCont">
                        {list.map(item => (
                            <div
                                key={item[keyProp]}
                                className="dropdownItem"
                                onClick={() => this.handleSelect(item)}
                            >
                                {item[displayProp]}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {isDropdownVisible && (
                <div className="overlay" onClick={this.handleClose} />
            )}
            </>
        )
    }
}