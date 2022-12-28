import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  generateMonthDays() {
    const date:Date = new Date();
    const day:number = date.getDate();
    const month:number = date.getMonth();
    const year:number = date.getFullYear();
    const dateOfFirstOfCurrentMonth:Date = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    );
    const numberOfDaysInLastMonth:number = new Date(
      date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear(),
      date.getMonth() === 0 ? 12 : date.getMonth(),
      0
    ).getDate();

    const numberOfDaysInCurrentMonth:number = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const dayOfLastOfCurrentMonth:number = new Date(
      date.getFullYear(),
      date.getMonth(),
      numberOfDaysInCurrentMonth
    ).getDay();

    const dayOfFirstOfCurrentMonth:number = dateOfFirstOfCurrentMonth.getDay();
    let currentMonth: number[][] = [[], [], [], [], [], []];
    for (let i = 0; i < 7; i++) {
      if (i === dayOfFirstOfCurrentMonth) {
        currentMonth[0][i] = 1;
      } else if (i < dayOfFirstOfCurrentMonth) {
        currentMonth[0][i] =
          numberOfDaysInLastMonth - (dayOfFirstOfCurrentMonth - (i + 1));
      } else {
        currentMonth[0][i] = 1 + (i - dayOfFirstOfCurrentMonth);
      }
    }
    for (let j = 1; j < 4; j++) {
      for (let i = 0; i < 7; i++) {
        currentMonth[j][i] = currentMonth[j - 1][6] + i + 1;
      }
    }

    for (let i = 0; i < 7; i++) {
      let potential = currentMonth[3][6] + i + 1;
      if (potential <= numberOfDaysInCurrentMonth) {
        currentMonth[4][i] = potential;
      } else {
        currentMonth[4][i] = i - dayOfLastOfCurrentMonth;
      }
    }
    for (let i = 0; i < 7; i++) {
      if (currentMonth[4][6] < 17) {
        currentMonth[5][i] = currentMonth[4][6] + i + 1;
      } else {
        let potential = currentMonth[4][6] + i + 1;
        if (potential <= numberOfDaysInCurrentMonth) {
          currentMonth[5][i] = potential;
        } else {
          if (dayOfLastOfCurrentMonth === 6) {
            currentMonth[5][i] = i + 1;
          } else {
            currentMonth[5][i] = i - dayOfLastOfCurrentMonth;
          }
        }
      }
    }
    const days_names:string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const days:number[][] = [[], [], [], [], [], []];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        days[i].push(
          currentMonth[i][j]
        );
      }
    }
    return {
      dayNames: days_names,
      days: days,
    }
  }
}
