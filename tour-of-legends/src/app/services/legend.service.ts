import { Injectable } from '@angular/core';
import { Legend } from '../Models/legend';
import { LEGENDS } from '../data/mock-legends';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  constructor(
    private messageService: MessageService,
  ) { }

  getLegends(): Observable<Legend[]> {
    this.messageService.add('LegendService: fetched legends');
    return of(LEGENDS);
  }

  getLegend(id: number): Observable<Legend> {
    this.messageService.add(`LegendService: fethced legend id=${id}`);
    return of(LEGENDS.find(y => y.id == id));
  }
}
