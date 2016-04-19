import * as decorator from "nodedata/core/decorators/repository";
import {authorize} from 'nodedata/core/decorators/authorize';
import {RSUserModel} from "../models/rsUserModel";
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';


@decorator.repository({ path: 'rsUserRepository', model: RSUserModel })
export class RSUserRepository extends DynamicRepository {
    
    @authorize({ roles: ['ROLE_ADMIN'] })
    public doAction(fieldName, value): Q.Promise<any> {
        return super.findByField(fieldName, value);
    }

    @authorize({ roles: ['ROLE_ADMIN'] })
    public doFindAll(): Q.Promise<any> {
        return super.findAll();
    }
}

export default RSUserRepository;

