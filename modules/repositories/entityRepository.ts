import * as decorator from "nodedata/core/decorators/repository";
import {Entity} from "../models/entity";
import {DynamicRepository} from 'nodedata/core/dynamic/dynamic-repository';
import {inject} from 'nodedata/di/decorators';

@decorator.repository({ path: 'entityRepository', model: Entity })
export class EntityRepository extends DynamicRepository {

    
}

export default EntityRepository;

