import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

// /ninjas is the path
@Controller('ninjas')
export class NinjasController {
    //defining methods for each one of the routes
    // in case of query strings
    //- GET /ninjas?type=fast
    @Get()
    getNinjas(@Query('type') type:string){
        return [{type}];
    }

    //- GET /ninjas/:id
    @Get(':id')
    // in order to parse the ':id' from the request so the logic in the method can work with it:
    // we use the @Param decorator
    getOneNinja(@Param('id') id: string){
        return {id};
    }

    // POST /ninjas (test with postman)
    @Post()
    // Parse the request body
    createNinja(){
        return {};
    }

    // PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: string){
        return {id};
    }

    //DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return {id};
    }
}
