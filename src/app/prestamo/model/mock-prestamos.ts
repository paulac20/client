import { PrestamoPage } from "./PrestamoPage";

export const PRESTAMO_DATA: PrestamoPage = {
    content: [  
        { id: 1, game: {id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoría 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 2, game: {id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoría 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' }}, client: {id: 2, name: 'Cliente2'}, date_ini: '02/01/2020', date_fin: '14/01/2020'},
        { id: 3, game: {id: 3, title: 'Juego 3', age: 4, category: { id: 1, name: 'Categoría 1' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' }},client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 4, game: {id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoría 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 5, game: {id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoría 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 6, game: {id: 6, title: 'Juego 6', age: 16, category: { id: 2, name: 'Categoría 2' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 7, game: {id: 7, title: 'Juego 7', age: 12, category: { id: 3, name: 'Categoría 3' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
        { id: 8, game: {id: 8, title: 'Juego 8', age: 14, category: { id: 3, name: 'Categoría 3' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2' }}, client: {id: 1, name: 'Cliente1'}, date_ini: '06/01/2020', date_fin: '12/01/2020'},
    ],
    pageable : {
        pageSize:5,
        pageNumber: 0,
        sort: [
            {property: "id", direction: "ASC"}
        ]
    },
    totalElements: 8
}