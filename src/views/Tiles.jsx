import React from 'react'
import { CardCases } from '../components/card-data/CardCases'
import { CardToday } from '../components/card-data/CardToday'
import { CardTotalDeath } from '../components/card-data/CardTotalDeath'
import { CardTodayDeath } from '../components/card-data/CardTodayDeath'
import { CardActive } from '../components/card-data/CardActive'
import { CardTotalRecovered } from '../components/card-data/CardTotalRecovered'
import '../index.css'
import './tiles.css'
import { TilesHook } from '../hooks/UseApi';

function Tiles() {
    const { countries, loading } = TilesHook();
    if (loading) {
        return <h2>Loading ... </h2>
    }
    const topcases = [...countries]
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 10);

    const toptoday = [...countries]
        .sort((a, b) => b.todayCases - a.todayCases)
        .slice(0, 10);

    const toptotaldeaths = [...countries]
        .sort((a, b) => b.deaths - a.deaths)
        .slice(0, 10);

    const toptodaydeaths = [...countries]
        .sort((a, b) => b.todayDeaths - a.todayDeaths)
        .slice(0, 10);

    const topactive = [...countries]
        .sort((a, b) => b.active - a.active)
        .slice(0, 10);
    const toprecovered = [...countries]
        .sort((a, b) => b.recovered - a.recovered)
        .slice(0, 10);

        
    return (
        <div className='my-5 mx-5'>
            <h1 className='font-roboto-bold text-roboto tiles-text underline-full'>Top 10 Country wise Covid-19 Update - Tiles</h1>
            <div className='tiles-container my-5'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-4">
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Top Case</h4>
                        {topcases.map((country) => (
                            <CardCases key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalCases={country.cases} />
                        ))
                        }
                    </div>
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Today Cases</h4>
                        {toptoday.map((country) => (
                            <CardToday key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                todayCases={country.todayCases} />
                        ))
                        }
                    </div>
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Today Deaths</h4>
                        {toptotaldeaths.map((country) => (
                            <CardTotalDeath key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totaldeaths={country.deaths} />
                        ))
                        }
                    </div>
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Today Deaths</h4>
                        {toptodaydeaths.map((country) => (
                            <CardTodayDeath key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                todaydeaths={country.todayDeaths} />
                        ))
                        }
                    </div>
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Top Active</h4>
                        {topactive.map((country) => (
                            <CardTodayDeath key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalactive={country.active} />
                        ))
                        }
                    </div>
                    <div className="top-10-list space-y-4">
                        <h4 className='font-roboto-bold text-roboto'>Top Recover</h4>
                        {toprecovered.map((country) => (
                            <CardTotalRecovered key={country.country}
                                flagUrl={country.countryInfo.flag}
                                countryName={country.country}
                                totalrecovered={country.recovered} />
                        ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Tiles