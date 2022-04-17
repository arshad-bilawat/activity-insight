export class User{
    id!: string;
    visitorFound!: boolean;
    requestId!: string;
    ipAddress!: string;
    incognito!: boolean;
    confidenceScore!: string
    firstSeenAt!: Date;
    lastSeenAt!: Date;
}