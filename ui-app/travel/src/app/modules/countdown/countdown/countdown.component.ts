import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild,} from '@angular/core';

/**
 * A time display element for a given target date, if target date is in the future, then show count down
 * if target date is in the past, calculate time duration until now.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    selector: 'app-countdown',
    standalone: true,
    styleUrl: './countdown.component.scss',
    templateUrl: './countdown.component.html',
})
export class CountdownComponent implements AfterViewInit {

    @ViewChild('days', {read: ElementRef, static: true})
    public days?: ElementRef;
    @ViewChild('hours', {read: ElementRef, static: true})
    public hours?: ElementRef;
    @ViewChild('minutes', {static: true})
    public minutes?: ElementRef;
    @ViewChild('seconds', {static: true})
    public seconds?: ElementRef;
    @ViewChild('message', {static: true})
    public message?: ElementRef;

    #countDownMsg = 'Countdown to Start:';
    #countUpMsg = 'Since Start:';

    public isCountDown = true;
    #date: Date = new Date();
    #now: number = 0;
    #targetDate: any = new Date(2025, 8, 1);
    #targetTime: any = this.#targetDate.getTime();
    #diff: number = 0;
    #months: Array<string> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    public currentTime: string = `${
        this.#months[this.#targetDate.getMonth()]
    } ${this.#targetDate.getDate()}, ${this.#targetDate.getFullYear()}`;


    ngAfterViewInit() {
        setInterval(() => {
            this.#date = new Date();
            this.#now = this.#date.getTime();
            this.isCountDown = this.#date < this.#targetDate;
            if (this.isCountDown) {
                this.#tickTockCountDown();
                this.#diff = this.#targetTime - this.#now;
            } else {
                this.#tickTockCountUp();
                this.#diff = this.#now - this.#targetTime;
            }

            this.#diff = this.#diff / (1000 * 60 * 60 * 24);

            !isNaN(this.days!.nativeElement.innerText)
                ? (this.days!.nativeElement.innerText = Math.floor(this.#diff))
                : (this.days!.nativeElement.innerHTML = `<img src="assets/images/circle_spinner.gif" />`);
        }, 1000);
    }

    #tickTockCountDown() {
        this.days!.nativeElement.innerText = Math.floor(this.#diff);
        this.hours!.nativeElement.innerText = 23 - this.#date.getHours();
        this.minutes!.nativeElement.innerText = 60 - this.#date.getMinutes();
        this.seconds!.nativeElement.innerText = 60 - this.#date.getSeconds();
        this.message!.nativeElement.innerText = this.#countDownMsg;
    }

    #tickTockCountUp() {
        this.days!.nativeElement.innerText = Math.floor(this.#diff);
        this.hours!.nativeElement.innerText = this.#date.getHours();
        this.minutes!.nativeElement.innerText = this.#date.getMinutes();
        this.seconds!.nativeElement.innerText = this.#date.getSeconds();
        this.message!.nativeElement.innerText = this.#countUpMsg;
    }
}
