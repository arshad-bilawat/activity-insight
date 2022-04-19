export class User {
    id!: string;
    visitorFound!: boolean;
    requestId!: string;
    ipAddress!: string;
    incognito!: boolean;
    confidenceScore!: Confidence
    firstSeenAt!: SeenAt;
    lastSeenAt!: SeenAt;
}
interface Confidence {
    /**
     * A number between 0 and 1 that tells how much the agent is sure about the visitor identifier.
     * The higher the number, the higher the chance of the visitor identifier to be true.
     */
    score: number;
    /**
     * Additional details about the score as a human-readable text
     */
    comment?: string;
}

interface SeenAt {
    /**
     * The date and time within your subscription. The string format is ISO-8601.
     * @example
     * '2022-03-16T05:18:24.610Z'
     * new Date(result.firstSeenAt.subscription)
     */
    subscription: string | null;
    /**
     * The date and time across all subscription. The string format is ISO-8601.
     * @example
     * '2022-03-16T05:18:24.610Z'
     * new Date(result.firstSeenAt.global)
     */
    global: string | null;
}