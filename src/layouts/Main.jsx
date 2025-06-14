import React from 'react'
import MenuInicio from './MenuInicio';
import './Main.css'
import Niveles from './NivelesPantalla';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDropup } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import App from '../App';
import mapas from '../data/mapas';


function Main() {


    const [mapaActual, setMapaActual] = useState(1)

    const [vistaMenu, setVistaMenu] = useState(false)
    const [jugando, setJugando] = useState(false)

    const handleRegresar = () => {
        setVistaMenu(prev => !prev)
    }

    const handleSalir = () => {
        setJugando(prev => !prev)
    }

    const [mapa, setMapa] = useState(mapas[0])

    useEffect(() => {        
        setMapa(mapas[mapaActual - 1])
    }, [mapaActual])



    return (
        <div className={`main-container ${jugando ? 'jugando' : ''}`}>
            <MenuInicio clasesExtra={`${vistaMenu ? '' : 'deslizar'}`}
                setVistaMenu={setVistaMenu}
            />

            <Niveles clasesExtra={`${vistaMenu ? 'deslizar' : ''}`}
                setJugando={setJugando} setMapaActual={setMapaActual} jugando={jugando}
            />

            <button className={`boton-cambiar regresar-niveles-btn
                    ${!vistaMenu ? 'mostrar' : ''}
                    ${jugando ? 'volver-btn' : ''}
                `}
                title='Regresar'
                onClick={jugando ? handleSalir : handleRegresar}
            >
                {!jugando && <IoIosArrowDropup />}
                {jugando && <GiExitDoor />}
            </button>

            <App mapa={mapa} setMapa={setMapa} jugando={jugando} mapaActual={mapaActual} />
        </div>
    )
}

export default Main