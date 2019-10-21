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

    render = () => (
        <div className={styles.cont}>
            <Navigation />
            <Header />
            <Random />
            <Search />
            <Categories />
            <Subscription />
            <Footer />
        </div>
    )
}