import React from 'react'
import styles from './index.module.sass'
import { FaSearch } from "react-icons/fa"

const mockImage = 'https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg'

export class Search extends React.PureComponent {

    state = {
        isFull: true,
        scrollerClassVisible: true
    }

    componentDidMount() {
        clearTimeout(this.timerID)
        this.addScrollerClass()
    }
    

    handleSubmit = ({ nativeEvent }) => {
        if(nativeEvent.which === 13 || nativeEvent.code === 'Enter') {
            // console.log(nativeEvent)
            this.shrinkSearch()
        }
    }

    shrinkSearch = () => this.setState({ isFull: false })

    addScrollerClass = () => {
        this.timerID = setTimeout(() => {
            this.setState({ scrollerClassVisible: false })
        }, 6000)
    }

    render() {
        const { isFull, scrollerClassVisible } = this.state
        
        return (
            <div className={styles.cont}>
                <div
                    className={isFull ? styles.searchCont : styles.searchContSM}
                >
                    <input
                        type="text"
                        placeholder='Search...'
                        className={styles.full}
                        onKeyPress={this.handleSubmit}
                    />
                    <FaSearch className={styles.icon}/>
                </div>
                {!isFull && (
                    <div
                        className={`${styles.listCont} ${scrollerClassVisible && styles.listNoScroller}`}
                    >
                        {new Array(20).fill(0).map((_, i) => (
                            <ListItem key={i} title={i}/>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

const ListItem = props => (
    <div className={styles.list}>
        <img src={mockImage} alt='Book cover'/>
        <div>
            <h1>Alibobo ⦁ Hafidiy ⦁ {props.title + 1}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus consequatur magni doloribus saepe, reprehenderit reiciendis sed. Dolor quas earum modi!</p>
        </div>
    </div>
)
