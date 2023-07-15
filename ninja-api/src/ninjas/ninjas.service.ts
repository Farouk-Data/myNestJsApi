//new service
import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
//these ninjas probably live somewhere(database) in our case we are going to use an array
export class NinjasService {
    //array of ninjas
    private ninjas = [
        { id: 0, name: "ninA", weapon: "stars"},
        { id: 1, name: "ninB", weapon: "swords"},
    ];
    //method to retrieve ninjas
    getNinjas(weapon?: 'stars' | 'swords')
    {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }

    //method to find a single ninja
    getOneNinja(id: number){
        const ninja = this.ninjas.find((ninja) => ninja.id === id);

        if (!ninja) {
            throw new Error("Ninja Not Found");
        }

        return (ninja);
    }

    //create a ninja object using DTO
    createNinja(createNinjaDto: CreateNinjaDto)
    {
        //add id to the dto object
        const newNinja = {
            ...createNinjaDto,
            id: Date.now(),
        }
        this.ninjas.push(newNinja);

        return (newNinja);
    }

    //update a new ninja  
    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto)
    {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                return { ...ninja, ...updateNinjaDto };
            }

            return ninja;
        });

        return this.getOneNinja(id);
    }

    //remove a ninja
    removeNinja(id: number) {
        //filter out the ninja  
        const toBeRemoved = this.getOneNinja(id);

        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);   

        return (toBeRemoved);
    }
}
