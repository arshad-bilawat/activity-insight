//import { DeviceDetectorService } from 'ngx-device-detector';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';
import { Activity } from './model/activity';
export class UserActivity {
  activity: Activity;
  constructor(
  ) {

    this.activity = new Activity();
    this.setUserDevice();
    this.setUserInformation();
    this.pageOnLoadEventHandler();
    this.clickEventHandler();
    this.changeEventHandler();
    this.scrollEventHandler();
  }

  pageOnLoadEventHandler() {
    var me = this;
    window.addEventListener('load', ($event) => {
      me.activity.setAction($event.type, '', '');
      console.log(me.activity);
    });

  }

  clickEventHandler() {
    const hotListernerList = ["BUTTON", "A"];
    var me = this;

    window.addEventListener('click', ($event: any) => {
      if ($event.target && hotListernerList.includes($event.target.nodeName)) {
        me.activity.setAction($event.type, $event.target.textContent,
          $event.target.nodeName);
        console.log(me.activity);
      }
      else if ($event.view.getSelection().type == 'Range') {
        me.activity.setAction('Selection',
          $event.view.getSelection().toString(),
          $event.target.nodeName);
        console.log(me.activity);
      }
    });
  }

  changeEventHandler(){
    var me = this;
    window.addEventListener('change', ($event: any) => {
      me.activity.setAction($event.type,
        $event.target.value,
        $event.target.nodeName,);
      console.log(me.activity);
    });
  }

  scrollEventHandler(){
    var me = this;
    window.addEventListener('window:scroll', ($event: any) => {
      // me.activity.setAction($event.type,
      //   $event.target.value,
      //   $event.target.nodeName,);
      // console.log(me.activity);
    });
  }

  setUserDevice() {
    // var deviceInfo = this.deviceDectector.getDeviceInfo();
    // this.activity.device.setAdditionalInformation(deviceInfo.browser, deviceInfo.browser_version, deviceInfo.device,
    //     deviceInfo.deviceType, deviceInfo.orientation, deviceInfo.os, deviceInfo.os_version,
    //     this.deviceDectector.isDesktop(), this.deviceDectector.isMobile(), this.deviceDectector.isTablet());
  }
  async setUserInformation() {
    let promise = new Promise((resolve, reject) => {
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
          this.activity.user.confidenceScore = result.confidence;
          this.activity.user.firstSeenAt = result.firstSeenAt;
          this.activity.user.lastSeenAt = result.lastSeenAt;
          this.activity.user.incognito = result.incognito;
          this.activity.user.ipAddress = result.ip;

          this.activity.location = result.ipLocation;
          resolve(this.activity.user);
        }
        );
    });
  }

  async getUserActivity() {
    this.activity = new Activity();
    this.setUserDevice();
    await this.setUserInformation();


    return this.activity;
    //document?.addEventListener('click', this.onMouseMove)

  }


}

export const action = new UserActivity()