import { Injectable } from '@angular/core';
import { LogFormatterService } from './log-formatter.service';

export type LogFormatterServiceType = new () => LogFormatterService;

@Injectable()
export abstract class LoggerConfig {
    enableDebug: boolean;
    logFormatterImplementation: LogFormatterServiceType
}