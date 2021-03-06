import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replaceNullValue' })
export class ReplaceNullValuePipe implements PipeTransform {
    transform(value: any): any {
        if (value) {
            return value;
        }
        return '--';
    }
}
