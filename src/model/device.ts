import { version } from "typescript";

export class Device {
    browser!: string;
    browser_version!: string;
    device!: string;
    deviceType!: string;
    orientation!: string;
    os!: string;
    os_version!: string;
    isDesktop!: boolean;
    isPhone!: boolean;
    isTablet!: boolean;
    cookieEnabled!: boolean;
    doNotTrack!: string | null;
    platform!: string;
    referrer!: string;
    userAgent!: string;
    language!: string;
    onLine!: boolean;
    vendor!: string;
    javaEnabled!: boolean;
    botProbability!: string;
    /**
     *
     */
    constructor() {
        if (navigator && document) {
            this.cookieEnabled = navigator.cookieEnabled;
            this.doNotTrack = navigator.doNotTrack;
            this.platform = navigator.platform;
            this.referrer = document.referrer;
            this.userAgent = navigator.userAgent;
            this.language = navigator.language;
            this.onLine = navigator.onLine;
            this.vendor = navigator.vendor;
            this.javaEnabled = navigator.javaEnabled();
        }

    }

    setAdditionalInformation(browser: string, browser_version: string, device: string,
        deviceType: string, orientation: string, os: string, os_version: string,
        isDesktop: boolean, isPhone: boolean, isTablet: boolean) {
        this.browser = browser;
        this.browser_version = browser_version;
        this.device = device;
        this.deviceType = deviceType;
        this.orientation = orientation;
        this.os = os;
        this.os_version = os_version;
        this.isDesktop = isDesktop;
        this.isPhone = isPhone;
        this.isTablet = isTablet;
    }

}