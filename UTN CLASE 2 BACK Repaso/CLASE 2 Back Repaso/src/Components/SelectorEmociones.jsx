import React, { useEffect, useState } from 'react'

const SelectorEmociones = () => {
    const emociones = [
        {
            name: 'Felicidad',
            catergorias: ['Niñez', 'Pubertad'],
        },
        {
            name: 'Tristeza',
            catergorias: ['Pubertad'],
        },
        {
            name: 'Furia',
            catergorias: ['Niñez'],
        }
    ]

    const [emocionSeleccionada, setEmocionSeleccionada] = useState(null)
    const categoriasDisponibles = ['Niñez', 'Pubertad']
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Niñez')
    const [emocionesState, setEmocionesState] = useState(emociones)
    const handleChangeCategoria = (nuevoValor) => {

        setCategoriaSeleccionada(nuevoValor)
    }

    const handleSelectEmocion = (emocion) => {
        if (emocionSeleccionada === emocion) {
            setEmocionSeleccionada(null)
        }
        else {
            setEmocionSeleccionada(emocion)
        }

    }

    useEffect(() => {
        if (categoriaSeleccionada) {
            setEmocionesState(emociones.filter(emocion => emocion.catergorias.includes(categoriaSeleccionada)))
        }
        else {
            setEmocionesState(emociones)
        }
    }, [categoriaSeleccionada])
    console.log(emocionSeleccionada)
    return (
        <div>
            <h1>Selector Emociones</h1>
            <div>
                {categoriasDisponibles.map(categoria => <button key={categoria} onClick={() => handleChangeCategoria(categoria)} >{categoria}</button>)}
            </div>
            <ListaEmociones emociones={emocionesState} handleSelectEmocion={handleSelectEmocion} emocionSeleccionada={emocionSeleccionada} />
        </div>
    )
}


const ListaEmociones = ({ emociones, handleSelectEmocion, emocionSeleccionada }) => {
    return (
        <>
            {
                emociones.map(emocion => <div
                    onClick={() => handleSelectEmocion(emocion.name)}
                    style={{ backgroundColor: emocionSeleccionada === emocion.name ? 'blue' : 'red' }}
                    className={'emocion ' + (emocion.name === emocionSeleccionada ? 'seleccionada' : '')}
                >{emocion.name}</div>)
            }
        </>
    )
}

export default SelectorEmociones
