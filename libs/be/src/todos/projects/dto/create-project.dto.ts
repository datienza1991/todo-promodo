import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    name: string;
    isActive?: boolean = false
}
