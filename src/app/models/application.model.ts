export class ApplicationModel {
     constructor(
    public CoreType_id: number = 0,
    public CoreTypeName: string = "",
    public SortOrder: number = 0,
    public Comments: string = "",
    public ModifiedOn: Date,
    public ModifiedBy: number = 0,
    public ApplicantLevel: string = "",
    public Designation: string = "",
    public TypeOfLeave: string = "",
    public NumberOfDaysNeeded number = 0,
    public ReturnDate: Date,
    public LeaveCommencement: Date,
    public ApplicationDate: Date,
    public AddressDetail: string = "",
    public Telephone: string = "",
    public NextOfKinContact: string = "",

  ) { }

}
