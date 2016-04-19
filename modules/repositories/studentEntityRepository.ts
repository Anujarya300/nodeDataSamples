import * as decorator from "nodedata/core/decorators/repository";
import {preauthorize} from "nodedata/core/decorators/preauthorize";
import {StudentEntity} from "../models/studentEntity";
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';

@decorator.repository({ path: 'studentEntityRepository', model: StudentEntity })
export class studentEntityRepository extends DynamicRepository {

    @preauthorize({ serviceName: "PreAuthService", methodName: "checkRole", params: { id: "#id", entity: "#entity" } })
    doAction() {

        
        // Custom code to do operations on an entity
       

    };



}

export default studentEntityRepository;

