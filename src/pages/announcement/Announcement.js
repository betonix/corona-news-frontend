import React, { useContext } from 'react'
import themes from '../../components/context/themes.module.css'
import context from '../../components/context/ThemeContext'
import style from './announce.module.css'

export const Announcement = () => {
  const theme = useContext(context)
  return (
    <div className="container">
      <section id='#nosso-porque'>
        <h2 className='subtitle'> Nossos números:</h2>
        <div className="row">
          <div className="description offset-2 col-md-4 col-sm-10">
            + de <span className={`${style.destaque} ${themes[theme + '-primary-color']}`}>2 milhões</span> <br/>de visualizações
          </div>
          <div className="description col-sm-10 offset-2 col-md-4">
            + de <span className={`${style.destaque} ${themes[theme + '-primary-color']}`}>1 milhões</span> <br/> de visitantes
          </div>
        </div>
      </section>

      <section>
        <h2 className='subtitle'> Nosso Objetivo:</h2>
        <p className='description'>
          Queremos incentivar doações para instituições e iniciativas que lutam contra o coronavírus, por isso para colocar sua marca no site
          entre em contato através do nosso email thegoodnewscoronavirus@gmail.com. A doação vai diretamente para as instituições parceiras
          de combate ao coronavírus.
        </p>
        <p className="description">
          Anuncie aqui e tenha sua marca vinculada a uma boa causa e juntos vamos superer essa pandemia.
        </p>
      </section>
    </div >
  )
}
