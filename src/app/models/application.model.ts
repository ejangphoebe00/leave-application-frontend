export class Application {
    ApplicationId?: number;
    Designation?: string;
    ApplicantLevel?: string;
    ApplicantId?: number;
    TypeOfLeave?: string;
    NumberOfDaysNeeded?: number;
    ReturnDate?: string; // date
    LeaveCommencement?: string; // date
    ApplicationDate?: string;  // date
    LeaveBalanceBroughtForward?: number;
    LeaveDueInYear?: number;
    LessLeaveTaken?: number;
    BalanceCarriedForward?: number;
    ComputedBy?: string;
    VerifiedBy?: string;
    ApprovalStatus?: string;
    DeclineReason?: string;
    ApprovedOrDeclinedBy?: string;
    CreationDate?: string; // date;
    UpdateDate?: string; // date
}

export class Address {
    AddressDetail?: string;
    Telephone?: string;
    NextOfKinContact?: string;
}

export class Recommendation {
    applicationId: number;
    RecommendationStatus: string;
    DeclineReason: string;
    Date: string;
}
