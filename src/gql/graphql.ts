/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: { input: any; output: any };
};

export enum Appointment_Status {
	Approved = 'APPROVED',
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Pending = 'PENDING',
}

export type AppSettings = {
	__typename?: 'AppSettings';
	_id?: Maybe<Scalars['ID']['output']>;
	branches?: Maybe<Array<BranchSchema>>;
	countriesVisa?: Maybe<Array<CountriesVisaSchema>>;
	logo?: Maybe<Scalars['String']['output']>;
	visaCategories?: Maybe<Array<Scalars['String']['output']>>;
};

export type AppSettingsListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type AppSettingsPagination = {
	__typename?: 'AppSettingsPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<AppSettings>>;
};

export type Appointment = {
	__typename?: 'Appointment';
	_id?: Maybe<Scalars['ID']['output']>;
	clientQuestions?: Maybe<Array<ClientQuestionsSchema>>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	email: Scalars['String']['output'];
	name: Scalars['String']['output'];
	phone: Scalars['String']['output'];
	profession: Scalars['String']['output'];
	service?: Maybe<Service>;
	status: Appointment_Status;
	subService: Scalars['String']['output'];
};

export type AppointmentListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type AppointmentPagination = {
	__typename?: 'AppointmentPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Appointment>>;
};

export type Attendance = {
	__typename?: 'Attendance';
	_id?: Maybe<Scalars['ID']['output']>;
	attendee: User;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	date?: Maybe<Scalars['DateTime']['output']>;
	note?: Maybe<Scalars['String']['output']>;
	status?: Maybe<Attendance_Status>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	verifyBy?: Maybe<User>;
};

export type AttendancePagination = {
	__typename?: 'AttendancePagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Attendance>>;
};

export type AttendanceQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export enum Attendance_Status {
	NotPresent = 'NOT_PRESENT',
	Pending = 'PENDING',
	Verified = 'VERIFIED',
}

export enum Booking_Status {
	Approved = 'APPROVED',
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Pending = 'PENDING',
}

export type Blog = {
	__typename?: 'Blog';
	_id?: Maybe<Scalars['ID']['output']>;
	author: User;
	cover?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	image?: Maybe<Scalars['String']['output']>;
	like?: Maybe<Scalars['Float']['output']>;
	shortDescription?: Maybe<Scalars['String']['output']>;
	status?: Maybe<Blog_Status>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type BlogPagination = {
	__typename?: 'BlogPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Blog>>;
};

export enum Blog_Status {
	Archive = 'ARCHIVE',
	Paused = 'PAUSED',
	Published = 'PUBLISHED',
}

export type BookingPackageListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type BranchInput = {
	address?: InputMaybe<Scalars['String']['input']>;
	branchName?: InputMaybe<Scalars['String']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
};

export type BranchSchema = {
	__typename?: 'BranchSchema';
	address?: Maybe<Scalars['String']['output']>;
	branchName?: Maybe<Scalars['String']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	phone?: Maybe<Scalars['String']['output']>;
};

export type ClientData = {
	__typename?: 'ClientData';
	_id?: Maybe<Scalars['ID']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	name: Scalars['String']['output'];
	phone?: Maybe<Scalars['String']['output']>;
};

export type ClientDataListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type ClientDataPagination = {
	__typename?: 'ClientDataPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<ClientData>>;
};

export type ClientQuestionsInput = {
	qDesc?: InputMaybe<Scalars['String']['input']>;
	qTitle?: InputMaybe<Scalars['String']['input']>;
};

export type ClientQuestionsSchema = {
	__typename?: 'ClientQuestionsSchema';
	qDesc?: Maybe<Scalars['String']['output']>;
	qTitle?: Maybe<Scalars['String']['output']>;
};

export type CommonMatchInput = {
	key: Scalars['String']['input'];
	operator: MatchOperator;
	value?: InputMaybe<Scalars['String']['input']>;
};

export type CountDownTimer = {
	__typename?: 'CountDownTimer';
	bookingEnd?: Maybe<Scalars['DateTime']['output']>;
	bookingStart?: Maybe<Scalars['DateTime']['output']>;
};

export type CountDownTimerInput = {
	bookingEnd?: InputMaybe<Scalars['DateTime']['input']>;
	bookingStart?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CountriesVisaInput = {
	country?: InputMaybe<Scalars['String']['input']>;
	visaCategory?: InputMaybe<Scalars['String']['input']>;
};

export type CountriesVisaSchema = {
	__typename?: 'CountriesVisaSchema';
	country?: Maybe<Scalars['String']['output']>;
	visaCategory?: Maybe<Scalars['String']['output']>;
};

export type CreateAppSettingInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	branches?: InputMaybe<Array<BranchInput>>;
	countriesVisa?: InputMaybe<Array<CountriesVisaInput>>;
	logo?: InputMaybe<Scalars['String']['input']>;
	visaCategories?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateAppointmentInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	clientQuestions?: InputMaybe<Array<ClientQuestionsInput>>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	email: Scalars['String']['input'];
	name: Scalars['String']['input'];
	phone: Scalars['String']['input'];
	profession: Scalars['String']['input'];
	service?: InputMaybe<Scalars['String']['input']>;
	status?: Appointment_Status;
	subService: Scalars['String']['input'];
};

export type CreateAttendanceInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	attendee: Scalars['String']['input'];
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	date?: InputMaybe<Scalars['DateTime']['input']>;
	note?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Attendance_Status>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	verifyBy?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBlogInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	author: Scalars['String']['input'];
	cover?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	image?: InputMaybe<Scalars['String']['input']>;
	like?: InputMaybe<Scalars['Float']['input']>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Blog_Status>;
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateClientDataInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	name: Scalars['String']['input'];
	phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMoneyReceiptInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	address?: InputMaybe<Scalars['String']['input']>;
	amountInNumber?: InputMaybe<Scalars['Int']['input']>;
	amountInWords?: InputMaybe<Scalars['String']['input']>;
	authorizeBy?: InputMaybe<Scalars['String']['input']>;
	clientName: Scalars['String']['input'];
	contactNumber?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	deliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	issueDate?: InputMaybe<Scalars['DateTime']['input']>;
	mrNo?: InputMaybe<Scalars['Int']['input']>;
	passportNo?: InputMaybe<Scalars['String']['input']>;
	paymentType?: InputMaybe<Payment_Method>;
	quantity?: InputMaybe<Scalars['Int']['input']>;
	serialNo?: InputMaybe<Scalars['Int']['input']>;
	service?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateNewsInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	category: Scalars['String']['input'];
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	relatedInfo?: InputMaybe<NewsTagsInput>;
	title: Scalars['String']['input'];
	videoUrl: Scalars['String']['input'];
};

export type CreatePackageBookingInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	bookingId: Scalars['String']['input'];
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	customerDetails?: InputMaybe<Scalars['String']['input']>;
	packageId?: InputMaybe<Scalars['String']['input']>;
	paymentDetails?: InputMaybe<PaymentDetailsInput>;
	status?: Booking_Status;
	transactionId?: InputMaybe<Scalars['String']['input']>;
	travelerDetails: TravelerDetailsInput;
};

export type CreateProjectInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	avatar: Scalars['String']['input'];
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProjectTaskInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	createAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	project: Scalars['String']['input'];
	status?: InputMaybe<Project_Status>;
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateServiceInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	author?: InputMaybe<Scalars['String']['input']>;
	banner?: InputMaybe<Scalars['String']['input']>;
	desc: Scalars['String']['input'];
	shortDesc?: InputMaybe<Scalars['String']['input']>;
	thumbnail?: InputMaybe<Scalars['String']['input']>;
	title: Scalars['String']['input'];
};

export type CreateTaskManagementInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	client: Scalars['String']['input'];
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	deadLine: Scalars['DateTime']['input'];
	dueAmount: Scalars['Int']['input'];
	files?: InputMaybe<Array<ServerFileReferenceInput>>;
	paidBillAmount: Scalars['Int']['input'];
	paymentStatus?: Payment_Status;
	progressStatus?: InputMaybe<Task_Progress_Status>;
	taskCreatedBy: Scalars['String']['input'];
	taskDetails: TaskDetails;
	taskId: Scalars['String']['input'];
	totalBillAmount: Scalars['Int']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateTeamInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	avatar: Scalars['String']['input'];
	email: Scalars['String']['input'];
	name: Scalars['String']['input'];
	phone?: InputMaybe<Scalars['String']['input']>;
	post: Scalars['String']['input'];
	role: User_Role;
	salary?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateTravelPackageInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	author?: InputMaybe<Scalars['String']['input']>;
	carouselThumbnails?: InputMaybe<Array<Scalars['String']['input']>>;
	countDown?: InputMaybe<CountDownTimerInput>;
	departureFrom?: InputMaybe<PlaceInfoInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	destination?: InputMaybe<PlaceInfoInput>;
	isPublished: Scalars['Boolean']['input'];
	packageStatus?: InputMaybe<Package_Status>;
	packageTitle: Scalars['String']['input'];
	ratingsAndReviews?: InputMaybe<Array<RatingsAndReviewsInput>>;
	regularPrice: Scalars['Float']['input'];
	salePrice?: InputMaybe<Scalars['Float']['input']>;
	saleStatus?: InputMaybe<Sale_Status>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	thumbnail?: InputMaybe<Scalars['String']['input']>;
	transportation?: InputMaybe<Array<TransportationInput>>;
	travelers?: InputMaybe<Array<TravelersInput>>;
};

export type CreateUserInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	accessToken?: InputMaybe<Scalars['String']['input']>;
	/** User avatar */
	avatar?: InputMaybe<Scalars['String']['input']>;
	/** User email */
	email: Scalars['String']['input'];
	/** User name */
	name?: InputMaybe<Scalars['String']['input']>;
	/** User password */
	password: Scalars['String']['input'];
	phone?: InputMaybe<Scalars['String']['input']>;
	/** User role */
	role?: InputMaybe<User_Role>;
};

export type CreateVisaRequirementInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	author: Scalars['String']['input'];
	cover?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description: Scalars['String']['input'];
	destinationCountry?: InputMaybe<Scalars['String']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<VisaReq_Status>;
	title: Scalars['String']['input'];
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	visaType?: InputMaybe<Visa_Types2>;
};

export type Expense = {
	__typename?: 'Expense';
	_id?: Maybe<Scalars['ID']['output']>;
	amount: Scalars['Float']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	title: Scalars['String']['output'];
};

export type ExpenseCalculationInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	amount: Scalars['Float']['input'];
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	title: Scalars['String']['input'];
};

export type ExpenseCalculationPagination = {
	__typename?: 'ExpenseCalculationPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Expense>>;
};

export type ExpenseListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export enum MatchOperator {
	Contains = 'contains',
	Eq = 'eq',
	Exists = 'exists',
	Gt = 'gt',
	Gte = 'gte',
	In = 'in',
	Lt = 'lt',
	Lte = 'lte',
	Ne = 'ne',
	Nin = 'nin',
}

export type MoneyReceipt = {
	__typename?: 'MoneyReceipt';
	_id?: Maybe<Scalars['ID']['output']>;
	address?: Maybe<Scalars['String']['output']>;
	amountInNumber?: Maybe<Scalars['Int']['output']>;
	amountInWords?: Maybe<Scalars['String']['output']>;
	authorizeBy: User;
	clientName: Scalars['String']['output'];
	contactNumber?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	deliveryDate?: Maybe<Scalars['DateTime']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	issueDate?: Maybe<Scalars['DateTime']['output']>;
	mrNo?: Maybe<Scalars['Int']['output']>;
	passportNo?: Maybe<Scalars['String']['output']>;
	paymentType?: Maybe<Payment_Method>;
	quantity?: Maybe<Scalars['Int']['output']>;
	serialNo?: Maybe<Scalars['Int']['output']>;
	service?: Maybe<Service>;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MoneyReceiptListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type MoneyReceiptPagination = {
	__typename?: 'MoneyReceiptPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<MoneyReceipt>>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addTask: ProjectTask;
	adminSignIn: User;
	bulkRemoveAppointment?: Maybe<Scalars['Boolean']['output']>;
	bulkRemoveBooking?: Maybe<Scalars['Boolean']['output']>;
	bulkRemoveClientData?: Maybe<Scalars['Boolean']['output']>;
	bulkRemoveTeam?: Maybe<Scalars['Boolean']['output']>;
	bulkRemoveUser?: Maybe<Scalars['Boolean']['output']>;
	createAppSetting: AppSettings;
	createAppointment: Appointment;
	createAttendance: Scalars['Boolean']['output'];
	createBlog: Blog;
	createBooking: PackageBooking;
	createClientData: ClientData;
	createExpenseCalculation: Scalars['Boolean']['output'];
	createMoneyReceipt: MoneyReceipt;
	createNews: News;
	createProject: Project;
	createService: Service;
	createTask: TaskManagement;
	createTeam: Team;
	createTravelPackage: TravelPackage;
	createVisaReq: VisaReq;
	removeAppointment?: Maybe<Scalars['Boolean']['output']>;
	removeAttendance?: Maybe<Scalars['Boolean']['output']>;
	removeBlog?: Maybe<Scalars['Boolean']['output']>;
	removeBooking?: Maybe<Scalars['Boolean']['output']>;
	removeClientData?: Maybe<Scalars['Boolean']['output']>;
	removeExpense?: Maybe<Scalars['Boolean']['output']>;
	removeMoneyReceipt?: Maybe<Scalars['Boolean']['output']>;
	removeNews?: Maybe<Scalars['Boolean']['output']>;
	removeProject: Project;
	removeProjectTask: Scalars['Boolean']['output'];
	removeService?: Maybe<Scalars['Boolean']['output']>;
	removeTask?: Maybe<Scalars['Boolean']['output']>;
	removeTeam?: Maybe<Scalars['Boolean']['output']>;
	removeTravelPackage?: Maybe<Scalars['Boolean']['output']>;
	removeUser?: Maybe<Scalars['Boolean']['output']>;
	removeVisaReq?: Maybe<Scalars['Boolean']['output']>;
	sendAppointmentReply: Scalars['Boolean']['output'];
	signIn: User;
	signUp: User;
	updateAppSettings: AppSettings;
	updateAppointment: Appointment;
	updateAttendance: Scalars['Boolean']['output'];
	updateBlog: Scalars['Boolean']['output'];
	updateBooking: PackageBooking;
	updateClientData: ClientData;
	updateExpenseCalculation: Scalars['Boolean']['output'];
	updateMoneyReceipt: MoneyReceipt;
	updateNews: News;
	updateProjectTask: ProjectTask;
	updateService: Service;
	updateTask: Scalars['Boolean']['output'];
	updateTeam: Team;
	updateTravelPackage: TravelPackage;
	updateUser: User;
	updateUserAndEmployeeRole: Scalars['Boolean']['output'];
	updateVisaReq: Scalars['Boolean']['output'];
};

export type MutationAddTaskArgs = {
	payload: CreateProjectTaskInput;
};

export type MutationAdminSignInArgs = {
	input: CreateUserInput;
};

export type MutationBulkRemoveAppointmentArgs = {
	uIds: Array<Scalars['String']['input']>;
};

export type MutationBulkRemoveBookingArgs = {
	uIds: Array<Scalars['String']['input']>;
};

export type MutationBulkRemoveClientDataArgs = {
	uIds: Array<Scalars['String']['input']>;
};

export type MutationBulkRemoveTeamArgs = {
	uIds: Array<Scalars['String']['input']>;
};

export type MutationBulkRemoveUserArgs = {
	uIds: Array<Scalars['String']['input']>;
};

export type MutationCreateAppSettingArgs = {
	input: CreateAppSettingInput;
};

export type MutationCreateAppointmentArgs = {
	input: CreateAppointmentInput;
};

export type MutationCreateAttendanceArgs = {
	input: CreateAttendanceInput;
};

export type MutationCreateBlogArgs = {
	input: CreateBlogInput;
};

export type MutationCreateBookingArgs = {
	input: CreatePackageBookingInput;
};

export type MutationCreateClientDataArgs = {
	input: CreateClientDataInput;
};

export type MutationCreateExpenseCalculationArgs = {
	input: ExpenseCalculationInput;
};

export type MutationCreateMoneyReceiptArgs = {
	input: CreateMoneyReceiptInput;
};

export type MutationCreateNewsArgs = {
	input: CreateNewsInput;
};

export type MutationCreateProjectArgs = {
	payload: CreateProjectInput;
};

export type MutationCreateServiceArgs = {
	input: CreateServiceInput;
};

export type MutationCreateTaskArgs = {
	input: CreateTaskManagementInput;
};

export type MutationCreateTeamArgs = {
	input: CreateTeamInput;
};

export type MutationCreateTravelPackageArgs = {
	input: CreateTravelPackageInput;
};

export type MutationCreateVisaReqArgs = {
	input: CreateVisaRequirementInput;
};

export type MutationRemoveAppointmentArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveAttendanceArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveBlogArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveBookingArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveClientDataArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveExpenseArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveMoneyReceiptArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveNewsArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveProjectArgs = {
	id: Scalars['String']['input'];
};

export type MutationRemoveProjectTaskArgs = {
	id: Scalars['String']['input'];
};

export type MutationRemoveServiceArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveTaskArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveTeamArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveTravelPackageArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveUserArgs = {
	input: CommonMatchInput;
};

export type MutationRemoveVisaReqArgs = {
	input: CommonMatchInput;
};

export type MutationSendAppointmentReplyArgs = {
	input: ReplyAppointmentInput;
};

export type MutationSignInArgs = {
	input: CreateUserInput;
};

export type MutationSignUpArgs = {
	input: CreateUserInput;
};

export type MutationUpdateAppSettingsArgs = {
	input: UpdateAppSettingInput;
};

export type MutationUpdateAppointmentArgs = {
	input: UpdateAppointmentInput;
};

export type MutationUpdateAttendanceArgs = {
	input: UpdateAttendanceInput;
};

export type MutationUpdateBlogArgs = {
	input: UpdateBlogInput;
};

export type MutationUpdateBookingArgs = {
	input: UpdatePackageBookingInput;
};

export type MutationUpdateClientDataArgs = {
	input: UpdateClientDataInput;
};

export type MutationUpdateExpenseCalculationArgs = {
	updateExpenseCalculationInput: UpdateExpenseCalculationInput;
};

export type MutationUpdateMoneyReceiptArgs = {
	input: UpdateMoneyReceiptInput;
};

export type MutationUpdateNewsArgs = {
	input: UpdateNewsInput;
};

export type MutationUpdateProjectTaskArgs = {
	payload: UpdateProjectTaskInput;
};

export type MutationUpdateServiceArgs = {
	input: UpdateServiceInput;
};

export type MutationUpdateTaskArgs = {
	input: UpdateTaskManagementInput;
};

export type MutationUpdateTeamArgs = {
	input: UpdateTeamInput;
};

export type MutationUpdateTravelPackageArgs = {
	input: UpdateTravelPackageInput;
};

export type MutationUpdateUserArgs = {
	input: UpdateUserInput;
};

export type MutationUpdateUserAndEmployeeRoleArgs = {
	input: UpdateUserAndEmployeeRoleInput;
};

export type MutationUpdateVisaReqArgs = {
	input: UpdateVisaRequirementInput;
};

export type News = {
	__typename?: 'News';
	_id?: Maybe<Scalars['ID']['output']>;
	category: Scalars['String']['output'];
	publishedAt?: Maybe<Scalars['DateTime']['output']>;
	relatedInfo?: Maybe<NewsTags>;
	title: Scalars['String']['output'];
	videoUrl: Scalars['String']['output'];
};

export type NewsListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type NewsPagination = {
	__typename?: 'NewsPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<News>>;
};

export type NewsTags = {
	__typename?: 'NewsTags';
	tags?: Maybe<Array<Scalars['String']['output']>>;
};

export type NewsTagsInput = {
	tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Package_Status {
	Always = 'ALWAYS',
	Finished = 'FINISHED',
	Upcoming = 'UPCOMING',
}

export enum Payment_Method {
	Bank = 'BANK',
	Bkash = 'BKASH',
	Nagad = 'NAGAD',
	None = 'NONE',
	Online = 'ONLINE',
	Rocket = 'ROCKET',
}

export enum Payment_Status {
	InReviewPaid = 'IN_REVIEW_PAID',
}

export type PackageBooking = {
	__typename?: 'PackageBooking';
	_id?: Maybe<Scalars['ID']['output']>;
	bookingId: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	customerDetails?: Maybe<User>;
	packageId?: Maybe<TravelPackage>;
	paymentDetails?: Maybe<PaymentDetailsSchema>;
	status: Booking_Status;
	transactionId?: Maybe<Scalars['String']['output']>;
	travelerDetails: TravelerDetailsSchema;
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PackageBookingPagination = {
	__typename?: 'PackageBookingPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<PackageBooking>>;
};

export type PagniationMeta = {
	__typename?: 'PagniationMeta';
	currentPage: Scalars['Float']['output'];
	hasNextPage: Scalars['Boolean']['output'];
	totalCount: Scalars['Float']['output'];
	totalPages: Scalars['Float']['output'];
};

export type PaymentDetailsInput = {
	paidFrom?: InputMaybe<Scalars['String']['input']>;
	paymentDateTime?: InputMaybe<Scalars['DateTime']['input']>;
	paymentMethod?: InputMaybe<Payment_Method>;
	paymentStatus?: Payment_Status;
	totalAmount: Scalars['Float']['input'];
};

export type PaymentDetailsSchema = {
	__typename?: 'PaymentDetailsSchema';
	paidFrom?: Maybe<Scalars['String']['output']>;
	paymentDateTime?: Maybe<Scalars['DateTime']['output']>;
	paymentMethod?: Maybe<Payment_Method>;
	paymentStatus?: Maybe<Payment_Status>;
	totalAmount: Scalars['Float']['output'];
};

export enum Payment_Status {
	Cancelled = 'CANCELLED',
	Due = 'DUE',
	Paid = 'PAID',
	PartiallyPaid = 'PARTIALLY_PAID',
	Refunded = 'REFUNDED',
}

export type PlaceInfoInput = {
	lat?: InputMaybe<Scalars['String']['input']>;
	lng?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
};

export type PlaceInfoSchema = {
	__typename?: 'PlaceInfoSchema';
	lat?: Maybe<Scalars['String']['output']>;
	lng?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
};

export type Project = {
	__typename?: 'Project';
	_id?: Maybe<Scalars['ID']['output']>;
	avatar: Scalars['String']['output'];
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectTask = {
	__typename?: 'ProjectTask';
	_id?: Maybe<Scalars['ID']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description?: Maybe<Scalars['String']['output']>;
	project: Project;
	status?: Maybe<Project_Status>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Project_Status {
	Completed = 'Completed',
	Inprogress = 'Inprogress',
	Pending = 'Pending',
}

export type Query = {
	__typename?: 'Query';
	Appointment: Appointment;
	Attendance: Attendance;
	Attendances: AttendancePagination;
	Blog: Blog;
	Blogs: BlogPagination;
	Client: ClientData;
	Clients: ClientDataPagination;
	VisaRequirement: VisaReq;
	VisaRequirements: VisaReqPagination;
	allEmployeeIds: Array<Scalars['String']['output']>;
	allNews: NewsPagination;
	appSettings: AppSettingsPagination;
	appointments: AppointmentPagination;
	booking: PackageBooking;
	bookings: PackageBookingPagination;
	expenseCalculation: Expense;
	expenseCalculationList: ExpenseCalculationPagination;
	moneyReceipt: MoneyReceipt;
	moneyReceipts: MoneyReceiptPagination;
	news: News;
	project: Project;
	projects: Array<Project>;
	service: Service;
	services: ServicePagination;
	task: TaskManagement;
	taskList: TaskManagementPagination;
	tasksByProjects: Array<ProjectTask>;
	team: Team;
	teams: TeamPagination;
	travelPackage: TravelPackage;
	travelPackages: TravelPackagePagination;
	user: User;
	users: UserPagination;
};

export type QueryAppointmentArgs = {
	input: CommonMatchInput;
};

export type QueryAttendanceArgs = {
	input: CommonMatchInput;
};

export type QueryAttendancesArgs = {
	input?: InputMaybe<AttendanceQueryDto>;
};

export type QueryBlogArgs = {
	input: CommonMatchInput;
};

export type QueryBlogsArgs = {
	input?: InputMaybe<BlogListQueryDto>;
};

export type QueryClientArgs = {
	input: CommonMatchInput;
};

export type QueryClientsArgs = {
	input?: InputMaybe<ClientDataListQueryDto>;
};

export type QueryVisaRequirementArgs = {
	input: CommonMatchInput;
};

export type QueryVisaRequirementsArgs = {
	input?: InputMaybe<VisaReqListQueryDto>;
};

export type QueryAllNewsArgs = {
	input?: InputMaybe<NewsListQueryDto>;
};

export type QueryAppSettingsArgs = {
	input?: InputMaybe<AppSettingsListQueryDto>;
};

export type QueryAppointmentsArgs = {
	input?: InputMaybe<AppointmentListQueryDto>;
};

export type QueryBookingArgs = {
	input: CommonMatchInput;
};

export type QueryBookingsArgs = {
	input?: InputMaybe<BookingPackageListQueryDto>;
};

export type QueryExpenseCalculationArgs = {
	input: CommonMatchInput;
};

export type QueryExpenseCalculationListArgs = {
	input?: InputMaybe<ExpenseListQueryDto>;
};

export type QueryMoneyReceiptArgs = {
	input: CommonMatchInput;
};

export type QueryMoneyReceiptsArgs = {
	input?: InputMaybe<MoneyReceiptListQueryDto>;
};

export type QueryNewsArgs = {
	input: CommonMatchInput;
};

export type QueryProjectArgs = {
	id: Scalars['String']['input'];
};

export type QueryServiceArgs = {
	input: CommonMatchInput;
};

export type QueryServicesArgs = {
	input?: InputMaybe<ServiceListQueryDto>;
};

export type QueryTaskArgs = {
	input: CommonMatchInput;
};

export type QueryTaskListArgs = {
	input?: InputMaybe<TaskListQueryDto>;
};

export type QueryTasksByProjectsArgs = {
	projectId: Scalars['String']['input'];
};

export type QueryTeamArgs = {
	input: CommonMatchInput;
};

export type QueryTeamsArgs = {
	input?: InputMaybe<TeamListQueryDto>;
};

export type QueryTravelPackageArgs = {
	input: CommonMatchInput;
};

export type QueryTravelPackagesArgs = {
	input?: InputMaybe<TravelPackageListQueryDto>;
};

export type QueryUserArgs = {
	input: CommonMatchInput;
};

export type QueryUsersArgs = {
	input?: InputMaybe<UserListQueryDto>;
};

export type QuestionsAnswers = {
	answer: Scalars['String']['input'];
	question: Scalars['String']['input'];
};

export type RatingsAndReviews = {
	__typename?: 'RatingsAndReviews';
	email?: Maybe<Scalars['String']['output']>;
	message?: Maybe<Scalars['String']['output']>;
	rating?: Maybe<Scalars['Float']['output']>;
};

export type RatingsAndReviewsInput = {
	email?: InputMaybe<Scalars['String']['input']>;
	message?: InputMaybe<Scalars['String']['input']>;
	rating?: InputMaybe<Scalars['Float']['input']>;
};

export type ReplyAppointmentInput = {
	_id: Scalars['String']['input'];
	email: Scalars['String']['input'];
	name: Scalars['String']['input'];
	payload: Array<QuestionsAnswers>;
};

export enum Sale_Status {
	Fixed = 'FIXED',
	Sale = 'SALE',
}

export type ServerFileReference = {
	__typename?: 'ServerFileReference';
	fileUrl: Scalars['String']['output'];
};

export type ServerFileReferenceInput = {
	fileUrl: Scalars['String']['input'];
};

export type Service = {
	__typename?: 'Service';
	_id?: Maybe<Scalars['ID']['output']>;
	author?: Maybe<User>;
	banner?: Maybe<Scalars['String']['output']>;
	desc: Scalars['String']['output'];
	shortDesc: Scalars['String']['output'];
	thumbnail?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
};

export type ServiceListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type ServicePagination = {
	__typename?: 'ServicePagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Service>>;
};

export enum SortType {
	Asc = 'ASC',
	Desc = 'DESC',
}

export enum Tourby {
	ByAir = 'BY_AIR',
	ByRail = 'BY_RAIL',
	ByRoad = 'BY_ROAD',
}

export type TaskDetails = {
	issuesDescription?: InputMaybe<Scalars['String']['input']>;
	taskAssignTo: Scalars['String']['input'];
	taskDescription?: InputMaybe<Scalars['String']['input']>;
	taskName: Scalars['String']['input'];
};

export type TaskListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type TaskManagement = {
	__typename?: 'TaskManagement';
	_id?: Maybe<Scalars['ID']['output']>;
	client: ClientData;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	deadLine: Scalars['DateTime']['output'];
	dueAmount: Scalars['Int']['output'];
	files?: Maybe<Array<ServerFileReference>>;
	paidBillAmount: Scalars['Int']['output'];
	paymentStatus: Payment_Status;
	progressStatus?: Maybe<Task_Progress_Status>;
	taskCreatedBy: User;
	taskDetails: TaskManagement_TaskDetails;
	taskId: Scalars['String']['output'];
	totalBillAmount: Scalars['Int']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskManagementPagination = {
	__typename?: 'TaskManagementPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<TaskManagement>>;
};

export type TaskManagement_TaskDetails = {
	__typename?: 'TaskManagement_TaskDetails';
	issuesDescription?: Maybe<Scalars['String']['output']>;
	taskAssignTo: Team;
	taskDescription?: Maybe<Scalars['String']['output']>;
	taskName: Scalars['String']['output'];
};

export enum Task_Progress_Status {
	Archived = 'ARCHIVED',
	Cancelled = 'CANCELLED',
	Completed = 'COMPLETED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING',
	Revision = 'REVISION',
	WorkDone = 'WORK_DONE',
}

export type Team = {
	__typename?: 'Team';
	_id?: Maybe<Scalars['ID']['output']>;
	avatar?: Maybe<Scalars['String']['output']>;
	email: Scalars['String']['output'];
	name: Scalars['String']['output'];
	phone?: Maybe<Scalars['String']['output']>;
	post: Scalars['String']['output'];
	role: User_Role;
	salary?: Maybe<Scalars['Float']['output']>;
};

export type TeamListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type TeamPagination = {
	__typename?: 'TeamPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<Team>>;
};

export type Transportation = {
	__typename?: 'Transportation';
	arrivalDate?: Maybe<Scalars['DateTime']['output']>;
	arrivalTime?: Maybe<Scalars['String']['output']>;
	departureDate?: Maybe<Scalars['DateTime']['output']>;
	departureStation?: Maybe<Scalars['String']['output']>;
	departureTime?: Maybe<Scalars['String']['output']>;
	destinationStation?: Maybe<Scalars['String']['output']>;
	journeyBreak?: Maybe<Scalars['String']['output']>;
	stops?: Maybe<Scalars['String']['output']>;
	tourBy: Tourby;
	transportName?: Maybe<Scalars['String']['output']>;
};

export type TransportationInput = {
	arrivalDate?: InputMaybe<Scalars['DateTime']['input']>;
	arrivalTime?: InputMaybe<Scalars['String']['input']>;
	departureDate?: InputMaybe<Scalars['DateTime']['input']>;
	departureStation?: InputMaybe<Scalars['String']['input']>;
	departureTime?: InputMaybe<Scalars['String']['input']>;
	destinationStation?: InputMaybe<Scalars['String']['input']>;
	journeyBreak?: InputMaybe<Scalars['String']['input']>;
	stops?: InputMaybe<Scalars['String']['input']>;
	tourBy?: Tourby;
	transportName?: InputMaybe<Scalars['String']['input']>;
};

export type TravelPackage = {
	__typename?: 'TravelPackage';
	_id?: Maybe<Scalars['ID']['output']>;
	author?: Maybe<User>;
	carouselThumbnails?: Maybe<Array<Scalars['String']['output']>>;
	countDown?: Maybe<CountDownTimer>;
	departureFrom?: Maybe<PlaceInfoSchema>;
	description?: Maybe<Scalars['String']['output']>;
	destination?: Maybe<PlaceInfoSchema>;
	isPublished: Scalars['Boolean']['output'];
	packageStatus: Package_Status;
	packageTitle: Scalars['String']['output'];
	ratingsAndReviews?: Maybe<Array<RatingsAndReviews>>;
	regularPrice: Scalars['Float']['output'];
	salePrice?: Maybe<Scalars['Float']['output']>;
	saleStatus: Sale_Status;
	shortDescription?: Maybe<Scalars['String']['output']>;
	thumbnail?: Maybe<Scalars['String']['output']>;
	transportation?: Maybe<Array<Transportation>>;
	travelers?: Maybe<Array<Travelers>>;
};

export type TravelPackageListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type TravelPackagePagination = {
	__typename?: 'TravelPackagePagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<TravelPackage>>;
};

export type TravelerDetailsInput = {
	adult: Scalars['Float']['input'];
	child: Scalars['Float']['input'];
};

export type TravelerDetailsSchema = {
	__typename?: 'TravelerDetailsSchema';
	adult: Scalars['Float']['output'];
	child: Scalars['Float']['output'];
};

export type Travelers = {
	__typename?: 'Travelers';
	travelerEmail?: Maybe<Scalars['String']['output']>;
};

export type TravelersInput = {
	travelerEmail?: InputMaybe<Scalars['String']['input']>;
};

export enum User_Role {
	Admin = 'ADMIN',
	Customer = 'CUSTOMER',
	Employee = 'EMPLOYEE',
	Moderator = 'MODERATOR',
}

export type UpdateAppSettingInput = {
	_id: Scalars['String']['input'];
	branches?: InputMaybe<Array<BranchInput>>;
	countriesVisa?: InputMaybe<Array<CountriesVisaInput>>;
	logo?: InputMaybe<Scalars['String']['input']>;
	visaCategories?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateAppointmentInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	clientQuestions?: InputMaybe<Array<ClientQuestionsInput>>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
	profession?: InputMaybe<Scalars['String']['input']>;
	service?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Appointment_Status>;
	subService?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAttendanceInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	attendee?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	date?: InputMaybe<Scalars['DateTime']['input']>;
	note?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Attendance_Status>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	verifyBy?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBlogInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	author?: InputMaybe<Scalars['String']['input']>;
	cover?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	like?: InputMaybe<Scalars['Float']['input']>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Blog_Status>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateClientDataInput = {
	_id: Scalars['String']['input'];
	email?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExpenseCalculationInput = {
	_id: Scalars['String']['input'];
	amount?: InputMaybe<Scalars['Float']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMoneyReceiptInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	address?: InputMaybe<Scalars['String']['input']>;
	amountInNumber?: InputMaybe<Scalars['Int']['input']>;
	amountInWords?: InputMaybe<Scalars['String']['input']>;
	authorizeBy?: InputMaybe<Scalars['String']['input']>;
	clientName?: InputMaybe<Scalars['String']['input']>;
	contactNumber?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	deliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	issueDate?: InputMaybe<Scalars['DateTime']['input']>;
	mrNo?: InputMaybe<Scalars['Int']['input']>;
	passportNo?: InputMaybe<Scalars['String']['input']>;
	paymentType?: InputMaybe<Payment_Method>;
	quantity?: InputMaybe<Scalars['Int']['input']>;
	serialNo?: InputMaybe<Scalars['Int']['input']>;
	service?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateNewsInput = {
	_id: Scalars['String']['input'];
	category?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	relatedInfo?: InputMaybe<NewsTagsInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePackageBookingInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	bookingId?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	customerDetails?: InputMaybe<Scalars['String']['input']>;
	packageId?: InputMaybe<Scalars['String']['input']>;
	paymentDetails?: InputMaybe<PaymentDetailsInput>;
	status?: InputMaybe<Booking_Status>;
	transactionId?: InputMaybe<Scalars['String']['input']>;
	travelerDetails?: InputMaybe<TravelerDetailsInput>;
};

export type UpdateProjectTaskInput = {
	_id?: InputMaybe<Scalars['ID']['input']>;
	createAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	project?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<Project_Status>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateServiceInput = {
	_id: Scalars['String']['input'];
	author?: InputMaybe<Scalars['String']['input']>;
	banner?: InputMaybe<Scalars['String']['input']>;
	desc?: InputMaybe<Scalars['String']['input']>;
	shortDesc?: InputMaybe<Scalars['String']['input']>;
	thumbnail?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaskManagementInput = {
	_id: Scalars['String']['input'];
	client?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	deadLine?: InputMaybe<Scalars['DateTime']['input']>;
	dueAmount?: InputMaybe<Scalars['Int']['input']>;
	files?: InputMaybe<Array<ServerFileReferenceInput>>;
	paidBillAmount?: InputMaybe<Scalars['Int']['input']>;
	paymentStatus?: InputMaybe<Payment_Status>;
	progressStatus?: InputMaybe<Task_Progress_Status>;
	taskCreatedBy?: InputMaybe<Scalars['String']['input']>;
	taskDetails?: InputMaybe<TaskDetails>;
	taskId?: InputMaybe<Scalars['String']['input']>;
	totalBillAmount?: InputMaybe<Scalars['Int']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateTeamInput = {
	_id: Scalars['String']['input'];
	avatar?: InputMaybe<Scalars['String']['input']>;
	email?: InputMaybe<Scalars['String']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
	post?: InputMaybe<Scalars['String']['input']>;
	role?: InputMaybe<User_Role>;
	salary?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTravelPackageInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	author?: InputMaybe<Scalars['String']['input']>;
	carouselThumbnails?: InputMaybe<Array<Scalars['String']['input']>>;
	countDown?: InputMaybe<CountDownTimerInput>;
	departureFrom?: InputMaybe<PlaceInfoInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	destination?: InputMaybe<PlaceInfoInput>;
	isPublished?: InputMaybe<Scalars['Boolean']['input']>;
	packageStatus?: InputMaybe<Package_Status>;
	packageTitle?: InputMaybe<Scalars['String']['input']>;
	ratingsAndReviews?: InputMaybe<Array<RatingsAndReviewsInput>>;
	regularPrice?: InputMaybe<Scalars['Float']['input']>;
	salePrice?: InputMaybe<Scalars['Float']['input']>;
	saleStatus?: InputMaybe<Sale_Status>;
	shortDescription?: InputMaybe<Scalars['String']['input']>;
	thumbnail?: InputMaybe<Scalars['String']['input']>;
	transportation?: InputMaybe<Array<TransportationInput>>;
	travelers?: InputMaybe<Array<TravelersInput>>;
};

export type UpdateUserAndEmployeeRoleInput = {
	employee_id?: InputMaybe<Scalars['String']['input']>;
	role?: InputMaybe<Scalars['String']['input']>;
	user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	accessToken?: InputMaybe<Scalars['String']['input']>;
	/** User avatar */
	avatar?: InputMaybe<Scalars['String']['input']>;
	/** User email */
	email?: InputMaybe<Scalars['String']['input']>;
	/** User name */
	name?: InputMaybe<Scalars['String']['input']>;
	/** User password */
	password?: InputMaybe<Scalars['String']['input']>;
	phone?: InputMaybe<Scalars['String']['input']>;
	/** User role */
	role?: InputMaybe<User_Role>;
};

export type UpdateVisaRequirementInput = {
	_id?: InputMaybe<Scalars['String']['input']>;
	author?: InputMaybe<Scalars['String']['input']>;
	cover?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	destinationCountry?: InputMaybe<Scalars['String']['input']>;
	image?: InputMaybe<Scalars['String']['input']>;
	status?: InputMaybe<VisaReq_Status>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	visaType?: InputMaybe<Visa_Types2>;
};

export type User = {
	__typename?: 'User';
	_id?: Maybe<Scalars['ID']['output']>;
	accessToken?: Maybe<Scalars['String']['output']>;
	avatar?: Maybe<Scalars['String']['output']>;
	email?: Maybe<Scalars['String']['output']>;
	name?: Maybe<Scalars['String']['output']>;
	password: Scalars['String']['output'];
	phone?: Maybe<Scalars['String']['output']>;
	role: User_Role;
};

export type UserListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type UserPagination = {
	__typename?: 'UserPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<User>>;
};

export type VisaReq = {
	__typename?: 'VisaReq';
	_id?: Maybe<Scalars['ID']['output']>;
	author: User;
	cover?: Maybe<Scalars['String']['output']>;
	createdAt?: Maybe<Scalars['DateTime']['output']>;
	description: Scalars['String']['output'];
	destinationCountry?: Maybe<Scalars['String']['output']>;
	image?: Maybe<Scalars['String']['output']>;
	status?: Maybe<VisaReq_Status>;
	title: Scalars['String']['output'];
	updatedAt?: Maybe<Scalars['DateTime']['output']>;
	visaType?: Maybe<Visa_Types>;
};

export type VisaReqListQueryDto = {
	limit?: InputMaybe<Scalars['Int']['input']>;
	page?: InputMaybe<Scalars['Int']['input']>;
	sort?: InputMaybe<SortType>;
	sortBy?: InputMaybe<Scalars['String']['input']>;
	where?: InputMaybe<Array<CommonMatchInput>>;
	whereOperator?: InputMaybe<Where_Operator>;
};

export type VisaReqPagination = {
	__typename?: 'VisaReqPagination';
	meta?: Maybe<PagniationMeta>;
	nodes?: Maybe<Array<VisaReq>>;
};

export enum VisaReq_Status {
	Archive = 'ARCHIVE',
	Paused = 'PAUSED',
	Published = 'PUBLISHED',
}

export enum Visa_Types {
	Business = 'BUSINESS',
	Medical = 'MEDICAL',
	Student = 'STUDENT',
	Tourist = 'TOURIST',
	WorkPermit = 'WORK_PERMIT',
}

export enum Visa_Types2 {
	Business = 'BUSINESS',
	Medical = 'MEDICAL',
	Student = 'STUDENT',
	Tourist = 'TOURIST',
	WorkPermit = 'WORK_PERMIT',
}

export enum Where_Operator {
	And = 'and',
	Or = 'or',
}
