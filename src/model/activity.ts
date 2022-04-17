import { Device } from "./device";
import { User } from "./user";
import { UserAction } from "./user-action";
import { UserLocation } from "./user-location";

export class Activity {
    device!: Device;
    userAction!: UserAction;
    location!: UserLocation;
    user!: User;
    /**
     *
     */
    constructor() {
        this.device = new Device();
        this.user = new User();
        this.location = new UserLocation();
        this.userAction = new UserAction();
    }

    setUser(user: User) {
        this.user = user;
    }
    setDevice(device: Device) {
        this.device = device;
    }
    setLocation(location: UserLocation) {
        this.location = location;
    }
    setAction(action: UserAction) {
        this.userAction = this.userAction;
    }
}