import { PartialType } from '@nestjs/mapped-types';
import { CreateBlitzmartRestapiDto } from './create-blitzmart-restapi.dto';

export class UpdateBlitzmartRestapiDto extends PartialType(CreateBlitzmartRestapiDto) {}
