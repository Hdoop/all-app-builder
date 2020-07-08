import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'momentFormat' })
export class MomentFormatPipe implements PipeTransform {
    transform(value: moment.MomentInput, format: string) {
        if (!value) {
            return '';
        }

        return moment(value).format(format);
    }
}

@Pipe({ name: 'momentTimeFormat' })
export class MomentTimeFormatPipe implements PipeTransform {
    private today = moment();
    transform(value: string, format: string) {
        if (!value) {
            return '';
        }

        return moment(this.today.format('MM/DD/YYYY') + ' ' + value).format(format);
    }
}
