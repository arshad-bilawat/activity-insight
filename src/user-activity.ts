import { DeviceDetectorService } from 'ngx-device-detector';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';
import { Activity } from './model/activity';
export class UserActivity {
    activity: Activity;
    constructor(private deviceDectector: DeviceDetectorService
        ) {
         
      this.activity=new Activity();
        }
    
        setUserDevice(){
            var deviceInfo = this.deviceDectector.getDeviceInfo();
        }
}