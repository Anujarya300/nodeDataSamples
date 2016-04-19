import {Strict} from 'nodedata/mongoose/enums';
import {document} from 'nodedata/mongoose/decorators';
import {Entity} from './entity';

@document({ name: 'StudentEntity', strict: Strict.false })
export class StudentEntity  extends Entity {

    
}

export default StudentEntity;