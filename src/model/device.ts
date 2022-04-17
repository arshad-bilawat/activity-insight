export class Device{
    browser!:string;
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
}