import * as decorator from "nodedata/core/decorators/repository";
import {Roles1} from "../models/RoleModel";
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';


@decorator.repository({ path: 'rolesRepository', model: Roles1 })
export class RoleRepository extends DynamicRepository {
    
   
}

export default RoleRepository;

