import React from 'react'
import { CardCases } from '../../components/card-tiles/CardCases'
import { CardToday } from '../../components/card-tiles/CardToday'
import { CardTotalDeath } from '../../components/card-tiles/CardTotalDeath'
import { CardTodayDeath } from '../../components/card-tiles/CardTodayDeath'
import { CardActive } from '../../components/card-tiles/CardActive'
import { CardTotalRecovered } from '../../components/card-tiles/CardTotalRecovered'
import { MergedApi } from "../../hooks/MergedApi";
import '../../../src/index.css'
import './tiles.css'

function Tiles() {
    const { loading, getTop } = MergedApi();

    if (loading) {
        return <h2>Loading ... </h2>
    }

    const tilConfig = [
        { title: 'Top Cases', data: getTop('cases'), Component: CardCases, propName: 'totalCases', valueKey: 'cases' },
        { title: 'Today Cases', data: getTop('todayCases'), Component: CardToday, propName: 'todayCases', valueKey: 'todayCases' },
        { title: 'Total Deaths', data: getTop('deaths'), Component: CardTotalDeath, propName: 'totaldeaths', valueKey: 'deaths' },
        { title: 'Today Deaths', data: getTop('todayDeaths'), Component: CardTodayDeath, propName: 'todaydeaths', valueKey: 'todayDeaths' },
        { title: 'Top Active', data: getTop('active'), Component: CardActive, propName: 'totalactive', valueKey: 'active' },
        { title: 'Top Recovered', data: getTop('recovered'), Component: CardTotalRecovered, propName: 'totalrecovered', valueKey: 'recovered' }
    ];

    return (
        <div className='my-5 mx-5'>
            <h1 className='font-roboto-bold text-roboto tiles-text underline-full'>
                Top 10 Country wise Covid-19 Update - Tiles
            </h1>

            <div className='tiles-container my-5'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-4">
                    {tilConfig.map(({ title, data, Component, propName, valueKey }) => (
                        <div key={title} className="over space-y-4">
                            <h4 className='font-roboto-bold text-roboto'>{title}</h4>
                            {data.map((country) => (
                                <Component
                                    key={country.country}
                                    flagUrl={country.countryInfo.flag}
                                    countryName={country.country}
                                    {...{ [propName]: country[valueKey] }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tiles
