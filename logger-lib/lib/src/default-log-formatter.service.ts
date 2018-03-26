import { Injectable } from '@angular/core';
import { LogFormatterService } from './log-formatter.service';

@Injectable()
export class DefaultLogFormatterService implements LogFormatterService {
    format(message: string): string {
        return message;
    }
}