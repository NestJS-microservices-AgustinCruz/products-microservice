import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPositive } from "class-validator";

export class PaginationDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    public page: number = 1;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    public limit: number = 5;
}