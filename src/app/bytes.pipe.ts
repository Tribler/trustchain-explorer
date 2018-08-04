import { Pipe, PipeTransform } from '@angular/core';

export type ByteUnit = 'B' | 'KB' | 'MB' | 'GB' | 'TB';


export function isNumber (value: any): value is number {
  return typeof value === 'number';
}

export function isNumberFinite (value: any): value is number {
  return isNumber(value) && isFinite(value);
}

export function isPositive (value: number): boolean {
  return value >= 0;
}

export function isInteger (value: number): boolean {
  // No rest, is an integer
  return (value % 1) === 0;
}

export function toDecimal (value: number, decimal: number): number {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  static formats: { [key: string]: { max: number, prev?: ByteUnit } } = {
    'B': {max: 1024},
    'KB': {max: Math.pow(1024, 2), prev: 'B'},
    'MB': {max: Math.pow(1024, 3), prev: 'KB'},
    'GB': {max: Math.pow(1024, 4), prev: 'MB'},
    'TB': {max: Number.MAX_SAFE_INTEGER, prev: 'GB'}
  };


  transform(input: any, decimal: number = 0, from: ByteUnit = 'B', to?: ByteUnit): any {

    if (!(isNumberFinite(input) &&
      isNumberFinite(decimal) &&
      isInteger(decimal) &&
      isPositive(decimal))) {
      return input;
    }

    let bytes = input;
    let unit = from;
    while (unit !== 'B') {
      bytes *= 1024;
      unit = BytesPipe.formats[unit].prev!;
    }

    if (to) {
      const format = BytesPipe.formats[to];

      const result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);

      return BytesPipe.formatResult(result, to);
    }

    for (const key in BytesPipe.formats) {
      const format = BytesPipe.formats[key];
      if (bytes < format.max) {

        const result = toDecimal(BytesPipe.calculateResult(format, bytes), decimal);

        return BytesPipe.formatResult(result, key);
      }
    }
  }

  static formatResult(result: number, unit: string): string {
    return `${result} ${unit}`;
  }

  static calculateResult(format: { max: number, prev?: ByteUnit }, bytes: number) {
    const prev = format.prev ? BytesPipe.formats[format.prev] : undefined;
    return prev ? bytes / prev.max : bytes;
  }
}