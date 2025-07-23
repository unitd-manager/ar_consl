import { Route, Routes } from 'react-router-dom';

import React, { lazy } from 'react';
import Loadable from '../layouts/loader/Loadable';

import UserToken from '../components/UserToken';
// import { Details } from '@material-ui/icons';

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
// const BlankLayout = Loadable(lazy(() => import('../layouts/BlankLayout')));
/***** Pages ****/

// Modals
const EditCostingSummaryModal = Loadable(
  lazy(() => import('../components/tender/EditCostingSummaryModal')),
);
const AddLineItemModal = Loadable(lazy(() => import('../components/tender/AddLineItemModal')));
const EditQuoteModal = Loadable(lazy(() => import('../components/tender/EditQuoteModal')));
const EditLineItemModal = Loadable(lazy(() => import('../components/tender/EditLineItemModal')));
const InvoiceData = Loadable(lazy(() => import('../components/finance/InvoiceData')));
const CreateReceipt = Loadable(lazy(() => import('../components/finance/CreateReceipt')));
const CreateNote = Loadable(lazy(() => import('../components/finance/CreateNote')));

const InvoiceModal = Loadable(lazy(() => import('../components/finance/InvoiceModal')));
const ReceiptModal = Loadable(lazy(() => import('../components/finance/ReceiptModal')));

const PdfData = Loadable(lazy(() => import('../views/smartconTables/Tickets')));
const PdfNext = Loadable(lazy(() => import('../views/smartconTables/GeneratePdf')));

const TicketsComponent = Loadable(lazy(() => import('../views/smartconTables/TicketsComponent')));
const Classic = Loadable(lazy(() => import('../views/dashboards/Cubosale')));
const Crypto = Loadable(lazy(() => import('../views/dashboards/Crypto')));
const Ecommerce = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
const General = Loadable(lazy(() => import('../views/dashboards/General')));
const Extra = Loadable(lazy(() => import('../views/dashboards/Extra')));
const About = Loadable(lazy(() => import('../views/About')));

/***** Apps ****/
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Chat = Loadable(lazy(() => import('../views/apps/chat/Chat')));
const Contacts = Loadable(lazy(() => import('../views/apps/contacts/Contacts')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/CalendarApp')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Shop = Loadable(lazy(() => import('../views/apps/ecommerce/Shop')));
const ShopDetail = Loadable(lazy(() => import('../views/apps/ecommerce/ShopDetail')));
const Treeview = Loadable(lazy(() => import('../views/apps/treeview/TreeView')));
const TicketList = Loadable(lazy(() => import('../views/apps/ticket/TicketList')));
const TicketDetail = Loadable(lazy(() => import('../views/apps/ticket/TicketDetail')));

/***** Ui Elements ****/
const Alerts = Loadable(lazy(() => import('../views/ui/Alerts')));
const Badges = Loadable(lazy(() => import('../views/ui/Badges')));
const Buttons = Loadable(lazy(() => import('../views/ui/Buttons')));
const Cards = Loadable(lazy(() => import('../views/ui/Cards')));
const Grid = Loadable(lazy(() => import('../views/ui/Grid')));
const Tables = Loadable(lazy(() => import('../views/ui/Tables')));
const Forms = Loadable(lazy(() => import('../views/ui/Forms')));
const Breadcrumbs = Loadable(lazy(() => import('../views/ui/Breadcrumbs')));
const Dropdowns = Loadable(lazy(() => import('../views/ui/DropDown')));
const BtnGroup = Loadable(lazy(() => import('../views/ui/BtnGroup')));
const Collapse = Loadable(lazy(() => import('../views/ui/Collapse')));
const ListGroup = Loadable(lazy(() => import('../views/ui/ListGroup')));
const Modal = Loadable(lazy(() => import('../views/ui/Modal')));
const Navbar = Loadable(lazy(() => import('../views/ui/Navbar')));
const Nav = Loadable(lazy(() => import('../views/ui/Nav')));
const Pagination = Loadable(lazy(() => import('../views/ui/Pagination')));
const Popover = Loadable(lazy(() => import('../views/ui/Popover')));
const Progress = Loadable(lazy(() => import('../views/ui/Progress')));
const Spinner = Loadable(lazy(() => import('../views/ui/Spinner')));
const Tabs = Loadable(lazy(() => import('../views/ui/Tabs')));
const Toasts = Loadable(lazy(() => import('../views/ui/Toasts')));
const Tooltip = Loadable(lazy(() => import('../views/ui/Tooltip')));

/***** Form Layout Pages ****/
const FormBasic = Loadable(lazy(() => import('../views/form-layouts/FormBasic')));
const FormGrid = Loadable(lazy(() => import('../views/form-layouts/FormGrid')));
const FormGroup = Loadable(lazy(() => import('../views/form-layouts/FormGroup')));
const FormInput = Loadable(lazy(() => import('../views/form-layouts/FormInput')));

/***** Form Pickers Pages ****/
const Datepicker = Loadable(lazy(() => import('../views/form-pickers/DateTimePicker')));
const TagSelect = Loadable(lazy(() => import('../views/form-pickers/TagSelect')));

/***** Form Validation Pages ****/
const FormValidate = Loadable(lazy(() => import('../views/form-validation/FormValidation')));
const FormSteps = Loadable(lazy(() => import('../views/form-steps/Steps')));
const FormEditor = Loadable(lazy(() => import('../views/form-editor/FormEditor')));
/***** Table Pages ****/
const Basictable = Loadable(lazy(() => import('../views/tables/TableBasic')));
const CustomReactTable = Loadable(lazy(() => import('../views/tables/CustomReactTable')));
const ReactBootstrapTable = Loadable(lazy(() => import('../views/tables/ReactBootstrapTable')));

/***** Chart Pages ****/
const ApexCharts = Loadable(lazy(() => import('../views/charts/ApexCharts')));
const ChartJs = Loadable(lazy(() => import('../views/charts/ChartJs')));

/***** Sample Pages ****/
const StarterKit = Loadable(lazy(() => import('../views/sample-pages/StarterKit')));
const Profile = Loadable(lazy(() => import('../views/sample-pages/Profile')));
const Gallery = Loadable(lazy(() => import('../views/sample-pages/Gallery')));
const SearchResult = Loadable(lazy(() => import('../views/sample-pages/SearchResult')));
const HelperClass = Loadable(lazy(() => import('../views/sample-pages/HelperClass')));

/***** Icon Pages ****/
const Bootstrap = Loadable(lazy(() => import('../views/icons/Bootstrap')));
const Feather = Loadable(lazy(() => import('../views/icons/Feather')));

/***** Map Pages ****/
const CustomVectorMap = Loadable(lazy(() => import('../views/maps/CustomVectorMap')));

/***** Widget Pages ****/
const Widget = Loadable(lazy(() => import('../views/widget/Widget')));

/***** CASL Access Control ****/
const CASL = Loadable(lazy(() => import('../views/apps/accessControlCASL/AccessControl')));

/***** Auth Pages ****/
const Error = Loadable(lazy(() => import('../views/auth/Error')));
// const RegisterFormik = Loadable(lazy(() => import('../views/auth/RegisterFormik')));
const LoginFormik = Loadable(lazy(() => import('../views/auth/LoginFormik')));
// const Maintanance = Loadable(lazy(() => import('../views/auth/Maintanance')));
// const LockScreen = Loadable(lazy(() => import('../views/auth/LockScreen')));
// const RecoverPassword = Loadable(lazy(() => import('../views/auth/RecoverPassword')));

const DataTable = Loadable(lazy(() => import('../views/cubosale/Projects')));
const Reports = Loadable(lazy(() => import('../views/cubosale/Reports')));

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

const AddProjects = Loadable(lazy(() => import('../views/cubosale/AddProjects')));
const EditProject = Loadable(lazy(() => import('../views/cubosale/EditProject')));

// Tender
const InvoiceTable = Loadable(lazy(() => import('../views/smartconTables/Invoice')));
const TaskTable = Loadable(lazy(() => import('../views/smartconTables/Task')));
const ProjectTable = Loadable(lazy(() => import('../views/smartconTables/Project')));
const ClientTable = Loadable(lazy(() => import('../views/smartconTables/Client')));
const TenderTable = Loadable(lazy(() => import('../views/smartconTables/Tender')));
const TimesheetTable = Loadable(lazy(() => import('../views/smartconTables/Timesheet')));
const TestTable = Loadable(lazy(() => import('../views/smartconTables/Test')));
const EmployeetrainingreportsTable = Loadable(lazy(() => import('../views/smartconTables/Employeetrainingreports')));
const StatementofAccountsReport = Loadable(lazy(() => import('../views/Reports/StatementofAccountsReport')));
const StatementofAccountsReport1 = Loadable(lazy(() => import('../views/Reports/StatementofAccountsReport1')));
const AgingReportsTable = Loadable(lazy(() => import('../views/smartconTables/AgingReports')));
const InvoiceByMonth = Loadable(lazy(() => import('../views/smartconTables/InvoiceByMonth')));
const EmployeeSalaryReport = Loadable(lazy(() => import('../views/smartconTables/EmployeeSalaryReport')));
const PayslipGeneratedReports = Loadable(lazy(() => import('../views/smartconTables/PayslipGeneratedReports')));
const IR8AReport = Loadable(lazy(() => import('../views/smartconTables/IR8AReport')));


// Details Table
const ClientDetailsTable = Loadable(lazy(() => import('../views/detailTable/ClientDetails')));
const InvoiceDetailsTable = Loadable(lazy(() => import('../views/detailTable/InvoiceDetails')));

const TenderDetailsTable = Loadable(lazy(() => import('../views/detailTable/TenderDetails')));
const TimesheetDetailsTable = Loadable(lazy(() => import('../views/detailTable/TimesheetDetails')));
const ProjectDetails = Loadable(lazy(() => import('../views/detailTable/ProjectDetails')));
// Finance Admin
const FinanceTable = Loadable(lazy(() => import('../views/smartconTables/Finance')));

// PayrollHR
const LeaveTable = Loadable(lazy(() => import('../views/smartconTables/Leave')));
const LeaveDetailsTable = Loadable(lazy(() => import('../views/detailTable/LeaveDetails')));
const LoanTable = Loadable(lazy(() => import('../views/smartconTables/Loan')));
const LoanDeatilsTable = Loadable(lazy(() => import('../views/detailTable/LoanDetails')));
const TrainingTable = Loadable(lazy(() => import('../views/smartconTables/Training')));
const TrainingDetailsTable = Loadable(lazy(() => import('../views/detailTable/TrainingDetails')));
const JobInformationTable = Loadable(lazy(() => import('../views/smartconTables/JobInformation')));
const JobInformationDetailsTable = Loadable(
  lazy(() => import('../views/detailTable/JobInformationDetails')),
);
const PayrollManagementTable = Loadable(
  lazy(() => import('../views/smartconTables/PayrollManagement')),
);

const Receipt = Loadable(lazy(() => import('../views/smartconTables/Receipt')));

const Employee = Loadable(lazy(() => import('../views/smartconTables/Employee')));
const EmployeeDetailsTable = Loadable(lazy(() => import('../views/detailTable/EmployeeDetails')));
const EmployeeDetailsData = Loadable(
  lazy(() => import('../views/detailTable/EmployeeDetailsData')),
);
const SmartAttendance = Loadable(lazy(() => import('../views/smartconTables/SmartAttendance')));
const PayrollManagementDetails = Loadable(
  lazy(() => import('../views/detailTable/PayrollManagementDetails')),
);
const CPFCalculatorTable = Loadable(lazy(() => import('../views/smartconTables/CPFCalculator')));
const CPFCalculatorDetails = Loadable(
  lazy(() => import('../views/detailTable/CPFCalculatorDetails')),
);

const CPFCalculatorEdit = Loadable(
  lazy(() => import('../views/EditData/CpfCalculatorEdit')),
);
// Admin
const StaffTable = Loadable(lazy(() => import('../views/smartconTables/Staff')));
const StaffDetailsTable = Loadable(lazy(() => import('../views/detailTable/StaffDetails')));
const ValuelistTable = Loadable(lazy(() => import('../views/smartconTables/Valuelist')));
const ValuelistDetailsTable = Loadable(lazy(() => import('../views/detailTable/ValuelistDetails')));
const SettingTable = Loadable(lazy(() => import('../views/smartconTables/Setting')));
const Section = Loadable(lazy(() => import('../views/smartconTables/Section')));
const SectionDetails = Loadable(lazy(() => import('../views/detailTable/SectionDetails')));
const TranslationDetails = Loadable(lazy(() => import('../views/detailTable/TranslationDetails')));
const SettingDetails = Loadable(lazy(() => import('../views/detailTable/SettingDetails')));
const UserGroupTable = Loadable(lazy(() => import('../views/smartconTables/UserGroup')));
const UserGroupDetails = Loadable(lazy(() => import('../views/detailTable/UserGroupDetails')));
const Translation = Loadable(lazy(() => import('../views/smartconTables/Translation')));

//SupplierModal

// Table Edit's
const FinanceEdit = Loadable(lazy(() => import('../views/EditData/FinanceEdit')));
const TenderEdit = Loadable(lazy(() => import('../views/EditData/TenderEdit')));
const TranslationEdit = Loadable(lazy(() => import('../views/EditData/TranslationEdit')));
const TrainingEdit = Loadable(lazy(() => import('../views/EditData/TrainingEdit')));
const EmployeeEdit = Loadable(lazy(() => import('../views/EditData/EmployeeEdit')));
const ProjectEdit = Loadable(lazy(() => import('../views/EditData/ProjectEdit')));
const ClientEdit = Loadable(lazy(() => import('../views/EditData/ClientEdit')));
const SectionEdit = Loadable(lazy(() => import('../views/EditData/SectionEdit')));
const LoanEdit = Loadable(lazy(() => import('../views/EditData/LoanEdit')));
const InvoiceEdit = Loadable(lazy(() => import('../views/EditData/InvoiceEdit')));
const LeavesEdit = Loadable(lazy(() => import('../views/EditData/LeavesEdit')));
const JobInformationEdit = Loadable(lazy(() => import('../views/EditData/JobInformationEdit')));
const StaffEdit = Loadable(lazy(() => import('../views/EditData/StaffEdit')));
const Login = Loadable(lazy(() => import('../views/detailTable/Login')));
const ValueListEdit = Loadable(lazy(() => import('../views/EditData/ValueListEdit')));
const TimesheetEdit = Loadable(lazy(() => import('../views/EditData/TimesheetEdit')));
const SettingEdit = Loadable(lazy(() => import('../views/EditData/SettingEdit')));
const UserGroupEdit = Loadable(lazy(() => import('../views/EditData/UserGroupEdit')));
const SmartAttendanceEdit = Loadable(lazy(() => import('../views/EditData/SmartAttendanceEdit')));

const ReceiptEdit = Loadable(lazy(() => import('../views/EditData/ReceiptEdit')));
//Reports
const ProjectReportTable = Loadable(lazy(() => import('../views/Reports/ProjectReport')));
const OverallSalesReportTable = Loadable(lazy(() => import('../views/Reports/OverAllSalesSummaryReport')));
const InvoiceByYearTable = Loadable(lazy(() => import('../views/Reports/InvoiceByYear')));
const ArReturnNotfiledCompanyReportTable = Loadable(lazy(() => import('../views/Reports/ArReturnNotfiledCompanyReport')));
const CompanyYearEndReport = Loadable(lazy(() => import('../views/Reports/CompanyYearEndReport')));
const AgmNotFiledReport = Loadable(lazy(() => import('../views/Reports/AgmNotFiledReport')));
// const TaskEdit= Loadable(lazy(() => import ('..')))
const FormcsCompanyReportTable = Loadable(lazy(() => import('../views/Reports/FormcsCompanyReport')));


//Reports
const CpfSummaryReports=Loadable(lazy(() => import('../views/smartconTables/CpfSummaryReports')))
const PurchaseGstReport=Loadable(lazy(() => import('../views/smartconTables/PurchaseGstReport')))

const Routernew = () => {
  const { token, setToken } = UserToken();

  if (!token) {
    return <LoginFormik setToken={setToken} />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<FullLayout></FullLayout>}>
          {/* Tendar Modal */}
          <Route
            path="/editcostingsummary"
            name="editcostingsummary"
            element={<EditCostingSummaryModal />}
          ></Route>
          <Route path="/addlineitem" name="addlineitem" element={<AddLineItemModal />}></Route>
          <Route path="/editquote" name="editquote" element={<EditQuoteModal />}></Route>
          <Route path="/editlineitem" name="editlineitem" element={<EditLineItemModal />}></Route>
          <Route path="/invoicedata" name="invoicedata" element={<InvoiceData />}></Route>
          <Route path="/createreceipt" name="createreceipt" element={<CreateReceipt />}></Route>
          <Route path="/createnote" name="createnote" element={<CreateNote/>}></Route>
          <Route path="/invoiceModal/:id" name="invoiceModal" element={<InvoiceModal/>}></Route>
          <Route path="/receiptModal/:id" name="invoiceModal" element={<ReceiptModal/>}></Route>
      {/* Table Edit's */}
          {/* <Route path="/ContentEdit/:title" name="clienttdata" element={<ContentEdit />}></Route> */}
          {/* <Route path="/TaskEdit/:id" name="clienttdata" element={<TaskEdit />}></Route> */}
          <Route path="/FinanceEdit/:id" name="financedata" element={<FinanceEdit />}></Route>
                    <Route path="/TranslationEdit/:id" name="translationdata" element={<TranslationEdit />}></Route>
          <Route path="/TrainingEdit/:id" name="trainingdata" element={<TrainingEdit />}></Route>
          <Route path="/EmployeeEdit/:id" name="trainingdata" element={<EmployeeEdit />}></Route>
          <Route path="/projectEdit/:id" name="projectdata" element={<ProjectEdit />}></Route>
          <Route path="/TenderEdit/:id" name="tenderdata" element={<TenderEdit />}></Route>
          <Route path="/clientEdit/:id" name="clientdata" element={<ClientEdit />}></Route>
          <Route path="/sectionEdit/:id" name="sectiondata" element={<SectionEdit />}></Route>
          <Route path="/LeavesEdit/:id" name="leavedata" element={<LeavesEdit />}></Route>
          <Route path="/SmartAttendanceEdit/:id" name="smartattendancedata" element={<SmartAttendanceEdit />}></Route>  
          <Route path="/InvoiceEdit/:id" name="invoicedata" element={<InvoiceEdit />}></Route>
          <Route path="/LoanEdit/:id/:employeeId" name="loandata" element={<LoanEdit />}></Route>
                    <Route
            path="/JobInformationEdit/:id"
            name="jobinformationdata"
            element={<JobInformationEdit />}
          ></Route>
          <Route path="/StaffEdit/:id" name="staffdata" element={<StaffEdit />}></Route>
          <Route path="/Login/:id" name="logindata" element={<Login />}></Route>
          <Route path="/ValueListEdit/:id" name="valuelistdata" element={<ValueListEdit />}></Route>
          
          <Route path="/SettingEdit/:id" name="settingdata" element={<SettingEdit />}></Route>
          <Route path="/UserGroupEdit/:id" name="usergroupdata" element={<UserGroupEdit />}></Route>
          
          <Route path="/ReceiptEdit/:id" name="receiptdata" element={<ReceiptEdit />}></Route>

          {/* Supplier Modal */}
         
          <Route path="/TimesheetEdit/:id" name="timesheetdata" element={<TimesheetEdit />}></Route>
          <Route
            path="/JobInformationEdit/:id"
            name="jobinformationdata"
            element={<JobInformationEdit />}
          ></Route>

          <Route path="/pdf/:id" name="pdfData" element={<PdfData />}></Route>
          <Route path="/pdfnext" name="pdfnextData" element={<PdfNext />}></Route>
          <Route path="/TicketsComponent" name="ComponentData" element={<TicketsComponent />}></Route>
          <Route path="/projects" name="projectsData"element={<DataTable />} />
          <Route path="/" name="Classic" element={<Classic />} />
          <Route path="/dashboards/crypto" name="crypto" element={<Crypto />}></Route>
          <Route path="/dashboards/ecommerce" name="ecommerce" element={<Ecommerce />}></Route>
          <Route path="/dashboards/general" name="general" element={<General />}></Route>
          <Route path="/dashboards/extra" name="extra" element={<Extra />}></Route>
          <Route path="/about" name="about" element={<About />}></Route>
          <Route path="/apps/notes" name="notes" element={<Notes />}></Route>
          <Route path="/apps/chat" name="chat" element={<Chat />}></Route>
          <Route path="/apps/contacts" name="contacts" element={<Contacts />}></Route>
          <Route path="/apps/calendar" name="calendar" element={<Calendar />}></Route>
          <Route path="/apps/email" name="email" element={<Email />}></Route>
          <Route path="/ecom/shop" name="email" element={<Shop />}></Route>
          <Route path="/ecom/shopdetail" name="email" element={<ShopDetail />}></Route>
          <Route path="/tickt/ticket-list" name="ticket list" element={<TicketList />}></Route>
          <Route
            path="/tickt/ticket-detail"
            name="ticket detail"
            element={<TicketDetail />}
          ></Route>
          <Route path="/apps/treeview" name="email" element={<Treeview />}></Route>
          <Route path="/ui/alerts" name="alerts" element={<Alerts />}></Route>
          <Route path="/ui/badges" name="badges" element={<Badges />}></Route>
          <Route path="/ui/buttons" name="buttons" element={<Buttons />}></Route>
          <Route path="/ui/cards" name="cards" element={<Cards />}></Route>
          <Route path="/ui/grid" name="grid" element={<Grid />}></Route>
          <Route path="/ui/table" name="table" element={<Tables />}></Route>
          <Route path="/ui/forms" name="forms" element={<Forms />}></Route>
          <Route path="/ui/breadcrumbs" name="breadcrumbs" element={<Breadcrumbs />}></Route>
          <Route path="/ui/dropdown" name="dropdown" element={<Dropdowns />}></Route>
          <Route path="/ui/button-group" name="button group" element={<BtnGroup />}></Route>
          <Route path="/ui/collapse" name="collapse" element={<Collapse />}></Route>
          <Route path="/ui/list-group" name="list-group" element={<ListGroup />}></Route>
          <Route path="/ui/modal" name="modal" element={<Modal />}></Route>
          <Route path="/ui/navbar" name="navbar" element={<Navbar />}></Route>
          <Route path="/ui/nav" name="nav" element={<Nav />}></Route>
          <Route path="/ui/pagination" name="pagination" element={<Pagination />}></Route>
          <Route path="/ui/popover" name="popover" element={<Popover />}></Route>
          <Route path="/ui/progress" name="progress" element={<Progress />}></Route>
          <Route path="/ui/spinner" name="spinner" element={<Spinner />}></Route>
          <Route path="/ui/tabs" name="tabs" element={<Tabs />}></Route>
          <Route path="/ui/toasts" name="toasts" element={<Toasts />}></Route>
          <Route path="/ui/tooltip" name="tooltip" element={<Tooltip />}></Route>
          <Route path="/form-layout/form-basic" name="form-basic" element={<FormBasic />}></Route>
          <Route path="/form-layout/form-grid" name="form-grid" element={<FormGrid />}></Route>
          <Route path="/form-layout/form-group" name="form-group" element={<FormGroup />}></Route>
          <Route path="/form-layout/form-input" name="form-input" element={<FormInput />}></Route>
          <Route path="/form-pickers/datepicker" name="datepicker" element={<Datepicker />} />
          <Route path="/form-pickers/tag-select" name="tag-select" element={<TagSelect />}></Route>
          <Route path="/form-validation" name="form-validation" element={<FormValidate />}></Route>
          <Route path="/form-steps" name="form-steps" element={<FormSteps />}></Route>
          <Route path="/form-editor" name="form-editor" element={<FormEditor />}></Route>

          <Route path="/tables/basic-table" name="basic-table" element={<Basictable />}></Route>
          <Route path="/tables/react-table" name="react-table" element={<CustomReactTable />} />
          <Route path="/tables/data-table" name="data-table" element={<ReactBootstrapTable />} />
          <Route path="/charts/apex" name="apex" element={<ApexCharts />}></Route>
          <Route path="/charts/chartjs" name="chartjs" element={<ChartJs />}></Route>
          <Route path="/sample-pages/profile" name="profile" element={<Profile />}></Route>
          <Route path="/sample-pages/helper-class" name="helper-class" element={<HelperClass />} />
          <Route path="/sample-pages/starterkit" name="starterkit" element={<StarterKit />} />
          <Route path="/sample-pages/gallery" name="gallery" element={<Gallery />}></Route>
          <Route
            path="/sample-pages/search-result"
            name="search-result"
            element={<SearchResult />}
          />
          <Route path="/icons/bootstrap" name="bootstrap" element={<Bootstrap />}></Route>
          <Route path="/icons/feather" name="feather" element={<Feather />}></Route>
          <Route path="/map/vector" name="vector" element={<CustomVectorMap />}></Route>
          <Route path="/widget" name="widget" element={<Widget />}></Route>
          <Route path="/casl" name="casl" element={<CASL />}></Route>
          <Route path="/auth/404" name="404" element={<Error />}></Route>
          <Route path="/projects/addproject" name="addproject" element={<AddProjects />}></Route>
          <Route
            path="/projects/editproject/:id"
            name="editproject"
            element={<EditProject />}
          ></Route>
          <Route path="/projects/projectreport" name="projectreport" element={<Reports />}></Route>
          <Route path="/OverAllSalesSummaryReport" name="clienttdata" element={<OverallSalesReportTable />}></Route>
          <Route path="/InvoiceByYear" name="clienttdata" element={<InvoiceByYearTable />}></Route>
          <Route path="/ArReturnNotfiledCompanyReport" name="clienttdata" element={<ArReturnNotfiledCompanyReportTable />}></Route>
          <Route path="/CompanyYearEndReport" name="clienttdata" element={<CompanyYearEndReport />}></Route>
          <Route path="/AgmNotFiledReport" name="clienttdata" element={<AgmNotFiledReport />}></Route>
          <Route path="/FormcsCompanyReport" name="clienttdata" element={<FormcsCompanyReportTable />}></Route>

          {/* Tender */}
          <Route path="/Task" name="tenderdata" element={<TaskTable />}></Route>

          <Route path="/Project" name="projectdata" element={<ProjectTable />}></Route>
          <Route path="/Tender" name="tenderdata" element={<TenderTable />}></Route>
          <Route path="/Client" name="clienttdata" element={<ClientTable />}></Route>
          <Route path="/ClientDetails" name="clientdetailsdata" element={<ClientDetailsTable />}></Route>
          <Route path="/InvoiceDetails" name="invoicedetailsdata" element={<InvoiceDetailsTable />}></Route>

          <Route path="/Timesheet" name="timesheetdata" element={<TimesheetTable />}></Route>
          <Route path="/TenderDetails" name="tenderdetailsdata" element={<TenderDetailsTable />}></Route>
          <Route
            path="/TimesheetDetails"
            name="timesheetdata"
            element={<TimesheetDetailsTable />}
          ></Route>

          <Route path="/Finance" name="financedata" element={<FinanceTable />}></Route>
          <Route path="/Invoice" name="invoicedata" element={<InvoiceTable />}></Route>
          
          <Route path="/Receipt" name="receiptdata" element={<Receipt />}></Route>
      
          <Route path="/Leave" name="leavedata" element={<LeaveTable />}></Route>
          <Route path="/LeaveDetails" name="leavedetailsdata" element={<LeaveDetailsTable />}></Route>
          <Route path="/ProjectDetails" name="projectdetailsdata" element={<ProjectDetails />}></Route>
          <Route path="/Loan" name="loandata" element={<LoanTable />}></Route>
          <Route path="/LoanDetails" name="loandetailsdata" element={<LoanDeatilsTable />}></Route>
          <Route
            path="/TrainingDetails"
            name="trainingdetailsdata"
            element={<TrainingDetailsTable />}
          ></Route>
          <Route path="/Training" name="trainingdata" element={<TrainingTable />}></Route>
          <Route
            path="/JobInformation"
            name="jobinformationdata"
            element={<JobInformationTable />}
          ></Route>
          <Route
            path="/JobInformationDetails"
            name="jobinformationdetailsdata"
            element={<JobInformationDetailsTable />}
          ></Route>

          <Route path="/CPFCalculator" name="cpfcalculatordata" element={<CPFCalculatorTable />}></Route>
          <Route
            path="/CPFCalculatorDetails"
            name="cpfcalculatordetailsdata"
            element={<CPFCalculatorDetails />}
          ></Route>
           <Route path="/cpfCalculatorEdit/:id" name="cpfEdit" element={<CPFCalculatorEdit />}></Route>

          <Route path="/Staff" name="staffdata" element={<StaffTable />}></Route>
          <Route path="/StaffDetails" name="staffdetailsdata" element={<StaffDetailsTable />}></Route>
          <Route path="/ProjectReport" name="projectreportdata" element={<ProjectReportTable />}></Route>
          
          <Route path="/Valuelist" name="valuelistdata" element={<ValuelistTable />}></Route>
          <Route
            path="/ValuelistDetails"
            name="valuelistdetailsdata"
            element={<ValuelistDetailsTable />}
          ></Route>
          <Route path="/Section" name="sectiondata" element={<Section />}></Route>
          <Route path="/Translation" name="translationdata" element={<Translation />}></Route>
          <Route path="/SectionDetails" name="sectiondata" element={<SectionDetails />}></Route>
          <Route path="/TranslationDetails" name="translationdetailsdata" element={<TranslationDetails />}></Route>
          <Route path="/Setting" name="settingdata" element={<SettingTable />}></Route>
          <Route path="/SettingDetails" name="settingdetailsdata" element={<SettingDetails />}></Route>
          <Route path="/UserGroup" name="usergroupdata" element={<UserGroupTable />}></Route>
          <Route path="/UserGroupDetails" name="usergroupdetailsdata" element={<UserGroupDetails />}></Route>
          <Route path="/Employee" name="employeedata" element={<Employee />}></Route>
          <Route
            path="/EmployeeDetails"
            name="employeedata"
            element={<EmployeeDetailsTable />}
          ></Route>
          <Route
            path="/EmployeeDetailsData/:id"
            name="employeedetailsdata"
            element={<EmployeeDetailsData />}
          ></Route>
          <Route path="/SmartAttendance" name="smartattendance" element={<SmartAttendance/>}></Route>
          <Route
            path="/PayrollManagement"
            name="payrollmanagementdata"
            element={<PayrollManagementTable />}
          ></Route>
          <Route
            path="/PayrollManagementDetails/:id"
            name="payrollmanagementdetailsdata"
            element={<PayrollManagementDetails />}
          ></Route>
         
          <Route path="/test" name="testdata" element={<TestTable />}></Route>
          <Route path="/Employeetrainingreports" name="employeetrainingdata" element={<EmployeetrainingreportsTable />}></Route>
          <Route path="/StatementofAccountsReport" name="AccountReportdata" element={<StatementofAccountsReport />}></Route>
          <Route path="/StatementofAccountsReport1" name="AccountReportdata1" element={<StatementofAccountsReport1 />}></Route>
          <Route path="/AgingReports" name="agingreportsdata" element={<AgingReportsTable />}></Route>
          <Route path="/CpfSummaryreports" name="cpfsummarydata" element={<CpfSummaryReports />}></Route>
          <Route path="/InvoiceByMonth" name="invoicebymonthdata" element={<InvoiceByMonth />}></Route>
          <Route path="/EmployeeSalaryReport" name="employeesalarydata" element={<EmployeeSalaryReport />}></Route>
          <Route path="/PayslipGeneratedReports" name="payslipgenerateddata" element={<PayslipGeneratedReports />}></Route>
          <Route path="/IR8AReport" name="IR8Adata" element={<IR8AReport />}></Route>
          <Route path="/PurchaseGstReport" name="purchasegstdata" element={<PurchaseGstReport />}></Route>

          
        </Route>

        
      </Routes>
    </div>
  );
};

export default Routernew;
