import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({name: 'datetime', standalone: true})
export class DatetimePipe implements PipeTransform {

    transform(value: DateTime | string | null | undefined) {
        const format = 'yyyy dd mm';
        if (value) {
            return typeof value === 'string' ? DateTime.fromISO(value).toFormat(format) : value.toFormat(format);

        }
        return '';
    }
}
