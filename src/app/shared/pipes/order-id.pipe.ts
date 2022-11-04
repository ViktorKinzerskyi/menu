import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'orderId'
})
export class OrderIdPipe implements PipeTransform {
  public transform (value: number, orderIdLength = 5): string {
    return (String('0').repeat(orderIdLength) + value.toString()).slice(orderIdLength * -1, orderIdLength + value.toString().length)
  }
}
