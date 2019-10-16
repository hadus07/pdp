import React from 'react'
import { Header } from '../../components/header'
import { Random } from '../../components/random'
import { Search } from '../../components/search'
import { Categories } from '../../components/categories'
import { Subscription } from '../../components/subscription/'

export const Home = () => (
    <>
        <Header />
        <Random />
        <Search />
        <Categories />
        <Subscription />
    </>
)