import { Prestamo } from "./Prestamo";

export const PRESTAMO_DATA_LIST: Prestamo[] = [
        { id: 1, game: {id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' }}, client: {id: 1, name: 'Cliente1'}, dateIni: '06/01/2020', dateFin: '12/01/2020'},
        { id: 2, game: {id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoría 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' }}, client: {id: 2, name: 'Cliente2'}, dateIni: '02/01/2020', dateFin: '14/01/2020'},
        { id: 3, game: {id: 3, title: 'Juego 3', age: 4, category: { id: 1, name: 'Categoría 1' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' }},client: {id: 1, name: 'Cliente1'}, dateIni: '06/01/2020', dateFin: '12/01/2020'},
        { id: 4, game: {id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoría 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' }}, client: {id: 1, name: 'Cliente1'}, dateIni: '06/01/2020', dateFin: '12/01/2020'},
        { id: 5, game: {id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' }}, client: {id: 1, name: 'Cliente1'}, dateIni: '06/01/2020', dateFin: '12/01/2020'},
]