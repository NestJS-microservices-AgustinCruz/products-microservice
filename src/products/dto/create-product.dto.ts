import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Type(() => String)       //intenta transofrmar el valor recibido a un String
  public name: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(0)
  @Type(() => Number)       //intenta transofrmar el valor recibido a un Number
  public price: number;
}
