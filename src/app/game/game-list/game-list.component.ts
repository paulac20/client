import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/model/category';
import { GameEditComponent } from '../game-edit/game-edit.component';
import { GameService } from '../game.service';
import { Game } from '../model/Game';
import { SessionService } from 'src/app/session/session.service';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

    categories! : Category[];
    games!: Game[];
    filterCategory!: Category | null;
    filterTitle!: string | null;

    constructor(
        private gameService: GameService,
        private categoryService: CategoryService,
        public dialog: MatDialog,
        public sessionService: SessionService
    ) { }

    ngOnInit(): void {

        this.gameService.getGames().subscribe(
            games => this.games = games
        );

        this.categoryService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    onCleanFilter(): void {
        this.filterTitle = null;
        this.filterCategory = null;

        this.onSearch();
    }

    onSearch(): void {

        const title = this.filterTitle ?? undefined;
        const categoryId = this.filterCategory != null ? this.filterCategory.id : undefined;

        this.gameService.getGames(title, categoryId).subscribe(
            games => this.games = games
        );
    }

    createGame() {    
        const dialogRef = this.dialog.open(GameEditComponent, {
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.ngOnInit();
        });    
    }  

    editGame(game: Game) {
        const dialogRef = this.dialog.open(GameEditComponent, {
            data: { game: game }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.onSearch();
        });
    }
}
