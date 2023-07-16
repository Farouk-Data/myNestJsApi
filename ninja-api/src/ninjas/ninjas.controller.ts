import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { NotFoundError } from 'rxjs';
import { BeltGuard } from 'src/belt/belt.guard';

//injections is the equivalent of this:
// const service = new NinjasService();
// const controller = new NinjasController(service);
// /ninjas is the path
@Controller('ninjas')
export class NinjasController {
    //constructor for ninja service
    //because of @injectable => ninja controller depends on ninja service
    constructor(private readonly ninjasService: NinjasService)
    {}
    //defining methods for each one of the routes
    // in case of query strings
    //- GET /ninjas?weapon=stars
    @Get()
    getNinjas(@Query('weapon') weapon:'stars' | 'swords'){
        //we don't need to create an instance of the service object each time we execute a method
        //Using constructor instead
        // const service = new NinjasService();
        return (this.ninjasService.getNinjas(weapon));
    }

    //- GET /ninjas/:id
    @Get(':id')
    // in order to parse the ':id' from the request so the logic in the method can work with it:
    // we use the @Param decorator
    //transform data using pipe
    getOneNinja(@Param('id', ParseIntPipe) id: number){
        try{
            return this.ninjasService.getOneNinja(id);
        }
        catch(e){
            throw  new NotFoundException("");
        }
    }

    // POST /ninjas (test with postman)
    @Post()
    //using guards:
    @UseGuards(BeltGuard)
    // Parse the request body
    //validation pipe
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto ){
        return this.ninjasService.createNinja(createNinjaDto);
    }

    // PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjasService.updateNinja(+id, updateNinjaDto);
    }

    //DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return this.ninjasService.removeNinja(+id);
    }
}
