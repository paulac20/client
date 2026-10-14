import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";

@Injectable()
export class DateAdapter extends NativeDateAdapter{

    override createDate(year: number, month: number, date: number): Date {
        return new Date(Date.UTC(year, month, date));
    }

    override today(): Date{
        const dateNow = new Date();

        return new Date(Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()));
    }
}