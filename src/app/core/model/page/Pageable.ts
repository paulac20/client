import { SortPage } from './SortPage';

// Representa la configuración completa de una página
export class Pageable {
    pageNumber!: number;
    pageSize!: number;
    sort!: SortPage[];
}
