export interface IPageProps {
    studioName: string;
    studioSubtitle?: string;
    studioFeeType: string;
    studioCurrency: string;
    studioAmount: string;
    studioType: string;
    studioSize: string;
    studioTarget: string;
    userId: string;
    studioUrl: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}

export interface ISubscriptionProps {
    createdAt: string;
    id: string;
    pageId: string;
    subscriptionDuration: string;
    subscriptionEndDate: string;
    subscriptionName: string;
    subscriptionStartDate: string;
    subscriptionStatus: string;
    updatedAt: string;
}

export type TCohort = {
    cohortApplicationEndDate: string;
    cohortApplicationStartDate: string;
    cohortBatch: string;
    cohortEndDate: string;
    cohortName: string;
    cohortProgram: string;
    cohortSize: string;
    cohortStartDate: string;
    cohortStatus: string;
    createdAt: string;
    id: string;
    _id: string;
};
export interface IPageRequestProps {
    cohorts: TCohort[];
    programAmount: string;
    programCoverImage: string;
    programCurrency: string;
    programFeeType: string;
    programName: string;
    programSize: string;
    programStatus: string;
    programSubtitle: string;
    programTarget: string;
    programType: string;
    programSeatCount: string;
    programDiscount: string;
    programUrl: string;
    userId: string;
    _id: string;
    externalLink: string;
    host: string;
}
