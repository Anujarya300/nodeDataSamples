import {Strict} from 'nodedata/mongoose/enums';
import {field, document} from 'nodedata/mongoose/decorators';
import {Types} from 'mongoose';

@document({ name: 'Entity', strict: Strict.false })
export class Entity {
    @field({ primary: true, autogenerated: true })
    _id: Types.ObjectId;

    @field()
    name: string;

    @field()
    createdBy: string;

    constructor(name: string, createdBy: string) {

        this.name = name;
        this.createdBy = createdBy;

    }
}

export default Entity;