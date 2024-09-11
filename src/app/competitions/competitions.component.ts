import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements AfterViewInit {

  private currentMonth = { value: new Date().getMonth() };
  private currentYear = { value: new Date().getFullYear() };

  private month_names = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private platform: Platform) {}

  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.generateCalendar(this.currentMonth.value, this.currentYear.value);

      const monthPicker = document.querySelector('#month-picker') as HTMLElement;
      const monthList = document.querySelector('.month-list') as HTMLElement;
      const dayTextFormate = document.querySelector('.day-text-formate') as HTMLElement;
      const timeFormate = document.querySelector('.time-formate') as HTMLElement;
      const dateFormate = document.querySelector('.date-formate') as HTMLElement;

      monthPicker?.addEventListener('click', () => {
        monthList?.classList.remove('hideonce');
        monthList?.classList.remove('hide');
        monthList?.classList.add('show');
        dayTextFormate?.classList.remove('showtime');
        dayTextFormate?.classList.add('hidetime');
        timeFormate?.classList.remove('showtime');
        timeFormate?.classList.add('hideTime');
        dateFormate?.classList.remove('showtime');
        dateFormate?.classList.add('hideTime');
      });

      monthList?.classList.add('hideonce');

      monthList?.querySelectorAll('div').forEach((month: any, index: number) => {
        month.addEventListener('click', () => {
          this.currentMonth.value = index;
          this.generateCalendar(this.currentMonth.value, this.currentYear.value);
          monthList?.classList.replace('show', 'hide');
          dayTextFormate?.classList.remove('hideTime');
          dayTextFormate?.classList.add('showtime');
          timeFormate?.classList.remove('hideTime');
          timeFormate?.classList.add('showtime');
          dateFormate?.classList.remove('hideTime');
          dateFormate?.classList.add('showtime');
        });
      });

      document.querySelector('#pre-year')?.addEventListener('click', () => {
        --this.currentYear.value;
        this.generateCalendar(this.currentMonth.value, this.currentYear.value);
      });

      document.querySelector('#next-year')?.addEventListener('click', () => {
        ++this.currentYear.value;
        this.generateCalendar(this.currentMonth.value, this.currentYear.value);
      });

      const todayShowTime = document.querySelector('.time-formate') as HTMLElement;
      const todayShowDate = document.querySelector('.date-formate') as HTMLElement;

      const showCurrentDateOption: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };
      const currentDateFormate = new Intl.DateTimeFormat('en-US', showCurrentDateOption).format(new Date());
      todayShowDate.textContent = currentDateFormate;

      setInterval(() => {
        const timer = new Date();
        const option: Intl.DateTimeFormatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        };
        const formateTimer = new Intl.DateTimeFormat('en-US', option).format(timer);
        todayShowTime.textContent = formateTimer;
      }, 1000);
    }
  }

  private isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
  }

  private getFebDays(year: number): number {
    return this.isLeapYear(year) ? 29 : 28;
  }

  private generateCalendar(month: number, year: number): void {
    const calendarDays = document.querySelector('.calendar-days');
    const calendarHeaderYear = document.querySelector('#year');
    const daysOfMonth = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    calendarDays!.innerHTML = '';
    calendarHeaderYear!.textContent = year.toString();

    const firstDay = new Date(year, month, 1);
    const currentDate = new Date();

    (document.querySelector('#month-picker') as HTMLElement).textContent = this.month_names[month];

    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= firstDay.getDay()) {
        day.innerHTML = i - firstDay.getDay() + 1;
  
        if (i - firstDay.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendarDays.appendChild(day);
    }
  };
  
}
