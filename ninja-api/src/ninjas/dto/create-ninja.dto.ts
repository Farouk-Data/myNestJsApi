import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars','swords'], {message:"Invalid Weapon!"})
    weapon: 'stars' | 'swords';
}
