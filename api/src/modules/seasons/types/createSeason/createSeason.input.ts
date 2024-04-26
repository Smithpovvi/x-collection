import { Field, InputType } from "@nestjs/graphql";
import { IsDate, IsString, Length } from "class-validator";

@InputType()
export class CreateSeasonInput {
  @Field(() => String)
  @IsString()
  @Length(3, 20)
  readonly seasonName!: string;

  @Field(() => String)
  @IsDate()
  readonly startDate!: string;

  @Field(() => String)
  @IsDate()
  readonly endDate!: string;
}
