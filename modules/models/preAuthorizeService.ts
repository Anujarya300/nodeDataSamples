import {service} from 'nodedata/di/decorators/service';
import {Entity} from './entity';
import RSUserRepository from '../repositories/RSUserRepository';
import {inject} from 'nodedata/di/decorators/inject';
import {RSUserModel} from './rsUserModel';
import {Roles1} from './RoleModel';

var userRepo: any;

@service({ 'singleton': true, 'serviceName': 'PreAuthService' })
export class PreAuthService {

    @inject()
    userRepo: RSUserRepository;


    // Method to check if the user is having designated role to 
    // perform an operation.
    checkRole(id: string, entity: Entity) {
        var usr: any;
        var _id: string = id;
        var rolesArray: Array<Roles1>;
        var role: Roles1;
        var isAdmin: boolean;
        debugger
        return this.userRepo.findOne(_id).then((user) => {
            usr = user;
            if (user == null || user == undefined) {
                throw 'user doesnot exist';
            }
            var rsuser = new RSUserModel(usr.name, usr.password, usr.email, usr.roles);
            rolesArray = user.roles;
            for (role of rolesArray) {
                if (role.name === "ROLE_ADMIN") {
                    isAdmin = true;
                    break;
                }
            }
            if (isAdmin) {
                return true;
            }
            else
                return false;          
        });  
    };

}

export default PreAuthService;