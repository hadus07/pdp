import React from 'react'
import styles from './index.module.sass'
import { Header } from '../../components/header'
import { Random } from '../../components/random'
import { Footer } from '../../components/footer'
import { Search } from '../../components/search'
import { Navigation } from '../../components/navigation'
import { Categories } from '../../components/categories'
import { Subscription } from '../../components/subscription/'

export class Home extends React.PureComponent {

    scroll = index => this.cont.scrollTo({
        left: 0,
        behavior: 'smooth',
        top: index * window.innerHeight,
    })

    render = () => (
        <div className={styles.cont} ref={r => this.cont = r}>
            <Navigation scrollTo={this.scroll}/>
            <Header />
            <Random />
            <Search />
            <Categories />
            <Subscription />
            <Footer />
        </div>
    )
}