import { DeviceDetectorService } from 'ngx-device-detector';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';
import { Activity } from './model/activity';
export class UserActivity {
    activity: Activity;
    constructor(private deviceDectector: DeviceDetectorService
    ) {

        this.activity = new Activity();
        this.setUserDevice();
        this.setUserInformation();
    }

    setUserDevice() {
        var deviceInfo = this.deviceDectector.getDeviceInfo();
        this.activity.device.setAdditionalInformation(deviceInfo.browser, deviceInfo.browser_version, deviceInfo.device,
            deviceInfo.deviceType, deviceInfo.orientation, deviceInfo.os, deviceInfo.os_version,
            this.deviceDectector.isDesktop(), this.deviceDectector.isMobile(), this.deviceDectector.isTablet());
    }
    setUserInformation(){
        const fpPromise = FingerprintJS.load({
            apiKey: '0h5G0ShSmP6LakGkdn6E',
          })
      
          // Get the visitor identifier when you need it.
          fpPromise
            .then(fp => fp.get({
              extendedResult: true,

            }))
            .then(result => {
              console.log(result);
              this.activity.user.id = result.visitorId;
              this.activity.user.requestId = result.requestId;
              this.activity.user.visitorFound = result.visitorFound;
              this.activity.user.confidenceScore =result.confidence;
              this.activity.user.firstSeenAt= result.firstSeenAt;
              this.activity.user.lastSeenAt=result.lastSeenAt;
              this.activity.user.incognito=result.incognito;
              this.activity.user.ipAddress=result.ip;

              this.activity.location=result.ipLocation;
            }
            );
    }

    getUserActivity(){
        return this.activity;
    }
}

export const action = new UserActivity(new DeviceDetectorService(null))