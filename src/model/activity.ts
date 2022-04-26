import { Device } from "./device";
import { User } from "./user";
import { UserAction } from "./user-action";
import { IpLocation } from "./ip-location";

export class Activity {
    device!: Device;
    userAction!: UserAction;
    location?: IpLocation;
    user!: User;
    /**
     *
     */
    constructor() {
        this.device = new Device();
        this.user = new User();
        this.location = new IpLocation();
        this.userAction = new UserAction();
    }

    setUser(user: User) {
        this.user = user;
    }
    setDevice(device: Device) {
        this.device = device;
    }
    setLocation(location: IpLocation) {
        this.location = location;
    }
    setAction(action: string, description: string, nodeName: string) {
        this.userAction.action=action;
        this.userAction.description=description;
        this.userAction.nodeName=nodeName;
        let date= new Date();
        this.userAction.time =  date.toUTCString();
        this.userAction.timestamp=date.getTime();
        this.userAction.title=document.title;
        this.userAction.url=document.URL;
    }
}