import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlitzmartRestapiService } from './blitzmart-restapi.service';
import { CreateBlitzmartRestapiDto } from './dto/create-blitzmart-restapi.dto';
import { UpdateBlitzmartRestapiDto } from './dto/update-blitzmart-restapi.dto';

@Controller('blitzmart-restapi')
export class BlitzmartRestapiController {
  constructor(private readonly blitzmartRestapiService: BlitzmartRestapiService) {}

  @Post()
  create(@Body() createBlitzmartRestapiDto: CreateBlitzmartRestapiDto) {
    return this.blitzmartRestapiService.create(createBlitzmartRestapiDto);
  }

  @Get()
  findAll() {
    return this.blitzmartRestapiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blitzmartRestapiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlitzmartRestapiDto: UpdateBlitzmartRestapiDto) {
    return this.blitzmartRestapiService.update(+id, updateBlitzmartRestapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blitzmartRestapiService.remove(+id);
  }
}
