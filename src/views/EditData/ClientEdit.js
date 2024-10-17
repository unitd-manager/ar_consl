import React, { useEffect, useState } from 'react';
import { TabPane, TabContent, Row, Col, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Icon from 'react-feather';
import ClientButton from '../../components/ClientTable/ClientButton';
import ClientMainDetails from '../../components/ClientTable/ClientMainDetails';
import ContactEditModal from '../../components/tender/ContactEditModal';
import ClientContactGetAndInsert from '../../components/ClientTable/ClientContactGetAndInsert';
// import ClientcreationModification from '../../components/ClientTable/ClientcreationModification';
import ClientProjectDataGet from '../../components/ClientTable/ClientProjectDataGet';
import ClientInvoiceDataGet from '../../components/ClientTable/ClientInvoiceDataGet';
import ClientTenderDataGet from '../../components/ClientTable/ClientTenderDataGet';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import message from '../../components/Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import Tab from '../../components/Project/Tab';
import AddNote from '../../components/tender/AddNote';
import ViewNote from '../../components/tender/ViewNote';
import creationdatetime from '../../constants/creationdatetime';
import ClientShareTrasfer from '../../components/ClientTable/ClientShareTrasfer';
import ClientShareIncrease from '../../components/ClientTable/ClientShareIncrease';
import ContactShareTransfer from '../../components/tender/ContactShareTransfer';
import ContactShareIncrease from '../../components/tender/ContactShareIncrease';
import CompanyAddressChange from '../../components/ClientTable/CompanyAddressChange';
import ClientCompanyAddressEdit from '../../components/ClientTable/ClientCompanyAddressEdit';
import CompanyNameChange from '../../components/ClientTable/CompanyNameChange';
import ClientCompanyNameEdit from '../../components/ClientTable/ClientCompanyNameEdit';
import ClientButtonPdf from '../../components/ClientTable/ClientButtonPdf';
import AttachmentModalV2 from '../../components/tender/AttachmentModalV2';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';

const ClientsEdit = () => {
  //Const Variables
  const [activeTab, setActiveTab] = useState('1');
  const [contactData, setContactData] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submittings, setSubmittings] = useState(false);
  const [contactDatas, setContactDatas] = useState();
  const [contactDatass, setContactDatass] = useState();
  const [addContactModal, setAddContactModal] = useState(false);
  const [addContactModals, setAddContactModals] = useState(false);
  const [addContactModalss, setAddContactModalss] = useState(false);
  const [clientsDetails, setClientsDetails] = useState();
  const [clientnameDetails, setclientnameDetails] = useState();
  const [clientaddressDetails, setclientaddressDetails] = useState();
  const [contactsDetails, setContactsDetails] = useState(null);
  const [editContactEditModal, setEditContactEditModal] = useState(false);
  const [editContactEditModals, setEditContactEditModals] = useState(false);
  const [editContactEditModalss, setEditContactEditModalss] = useState(false);
  const [projectDetails, setProjectDetails] = useState();
  const [tenderDetails, setTenderDetails] = useState();
  const [invoiceDetails, setInvoiceDetails] = useState();
  const [allCountries, setallCountries] = useState();
  const [allNationality, setallNationality] = useState();
  const [transferDetails, setTransferDetails] = useState();
  const [increaseDetails, setIncreaseDetails] = useState();
  const [companyAddressData, setCompanyAddressData] = useState();
  const [addCompanyaddressModal, setAddCompanyaddressModal] = useState(false);
  const [companyaddressEditModal, setCompanyAddressEditModal] = useState(false);
  const [companyNameData, setCompanyNameData] = useState();
  const [addCompanynameModal, setAddCompanynameModal] = useState(false);
  const [companynameEditModal, setCompanyNameEditModal] = useState(false);
  const [companyaddressDetails, setCompanyAddressDetails] = useState();
  const [companynameDetails, setCompanyNameDetails] = useState();
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [director, setDirector] = useState();
  const [nameDetails, setNameDetails] = useState();
  const [update, setUpdate] = useState(false);
  const [addressDetails, setAddressDetails] = useState();

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  //  button
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/client');
  };

  //  AttachmentModal
  const [RoomName, setRoomName] = useState('');
  const [fileTypes, setFileTypes] = useState('');
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });

  const addContactToggle = () => {
    setAddContactModal(!addContactModal);
  };
  const addContactToggles = () => {
    setAddContactModals(!addContactModals);
  };
  const addContactToggless = () => {
    setAddContactModalss(!addContactModalss);
  };

  const addcompanyaddressToggle = () => {
    setAddCompanyaddressModal(!addCompanyaddressModal);
  };

  const addcompanynameToggle = () => {
    setAddCompanynameModal(!addCompanynameModal);
  };

  //Client Functions/Methods
  const handleInputs = (e) => {
    setClientsDetails({ ...clientsDetails, [e.target.name]: e.target.value });
  };

  //  Get Clients By Id
  const editClientsById = () => {
    api.post('/clients/getClientsById', { company_id: id }).then((res) => {
      setClientsDetails(res.data.data[0]);
      //setclientnameDetails(res.data.data[res.data.data.length - 1]);
      setclientaddressDetails(res.data.data[res.data.data.length - 1]);
    });
  };

   //  Get Clients By Id
   const editClientsnameById = () => {
    api.post('/clients/getClientnameById', { company_id: id }).then((res) => {
      //setClientsDetails(res.data.data[0]);
      setclientnameDetails(res.data.data[res.data.data.length - 1]);
      //setclientaddressDetails(res.data.data[res.data.data.length - 1]);
    });
  };

  //Logic for edit data in db
  const editClientsData = () => {
    clientsDetails.modification_date = creationdatetime;
    if (
      clientsDetails.company_name !== '' &&
      clientsDetails.reg_no !== '' &&
      clientsDetails.category !== '' &&
      clientsDetails.group_name !== ''
    ) {
      api
        .post('/clients/editClients', clientsDetails)
        .then(() => {
          message('Record editted successfully', 'success');
          editClientsById();
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };
  //Logic for edit data in db
  // const editClientsData = () => {

  //     clientsDetails.modification_date = creationdatetime;
  //     if (clientsDetails && clientsDetails.company_name !== '' && clientsDetails.category!==''  ) {
  //     api
  //       .post('/clients/editClients', clientsDetails)
  //       .then(() => {
  //         message('Record editted successfully', 'success');
  //         editClientsById();
  //       })
  //       .catch(() => {
  //         message('Unable to edit record.', 'error');
  //       });
  //   } else {
  //     message('Please fill all required fields', 'warning');
  //   }
  // };

  // get Contact Linked by id
  const getContactLinked = () => {
    api.post('/clients/getContactLinkedByCompanyId', { company_id: id }).then((res) => {
      setContactsDetails(res.data.data);
    });
  };
  const getShareTransfer = () => {
    api.post('/clients/getShareTransfer', { company_id: id }).then((res) => {
      setTransferDetails(res.data.data);
    });
  };
  const getShareIncrease = () => {
    api.post('/clients/getShareIncrease', { company_id: id }).then((res) => {
      setIncreaseDetails(res.data.data);
    });
  };
  //Email
  const sendMail = () => {
    if (window.confirm(' Are you sure do you want to send Mail to this Client \n')) {
      const to = 'fatema@unitdtechnologies.com';
      const text = 'Hello';
      const subject = 'Test Mail';
      api
        .post('/email/sendemail', { to, text, subject })
        .then(() => {
          message('Email sent successfully.', 'success');
        })
        .catch(() => {
          message('Email Data Not Found', 'info');
        });
    } else {
      applyChanges();
    }
  };

  // insert Contact
  const [newContactData, setNewContactData] = useState({
    salutation: '',
    first_name: '',
    email: '',
    position: '',
    department: '',
    phone_direct: '',
    fax: '',
    mobile: '',
    nationality: '',
    date_of_appointment: '',
    secretary_appoint_date: '',
    secretary_resign_date: '',
    issued_share_capital: '',
    id_card_type: '',
    id_card_no: '',
    address_flat: '',
    address_street: '',
    address_town: '',
    sing_pass: '',
    address_po_code: '',
    address_country: '',
    date_in_forms: '',
  });
  const PaidUp = clientsDetails && clientsDetails.CapitalTotal;

  const AddNewContact = () => {
    const newContactWithCompanyId = newContactData;
    newContactWithCompanyId.company_id = id;
    newContactData.position = newContactData.position.toString();
    
    if (
      newContactData.salutation !== '' &&
      newContactData.first_name !== '' &&
      newContactData.id_card_no !== '' &&
      newContactData.id_card_type !== '' &&
      newContactData.issued_share_capital !== ''
    ) {
      // Check if issued_share_capital exceeds paidup_capital
      const issuedShareCapital = parseFloat(newContactData.issued_share_capital);
      const paidupCapital = parseFloat(PaidUp); // Assuming paidup_capital is a variable accessible in this scope
      if (issuedShareCapital > paidupCapital) {
        message('Issued share capital cannot exceed paid-up capital', 'warning');
        return; // Stop execution if validation fails
      }
      
      api
        .post('/clients/insertContact', newContactWithCompanyId)
        .then(() => {
          // const insertedDataId = res.data.data.insertId;
          message('Contact inserted successfully.', 'success');
          window.location.reload();
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  const handleChanges = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { position } = newContactData;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setNewContactData({
        position: [...position, value],
        response: [...position, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setNewContactData({
        position: position.filter((el) => el !== value),
        response: position.filter((el) => el !== value),
      });
    }
  };

  //Contact Functions/Methods
  const handleAddNewContact = (e) => {
    setNewContactData({ ...newContactData, [e.target.name]: e.target.value });
  };

  // insert Share Transfer
  const [newTransferData, setNewTransferData] = useState({
    from_contact_id: '',
    to_contact_id: '',
    transfer_date: '',
    no_of_shares: '',
    consideration: '',
    director_authorizing_id: '',
  });

  const AddNewTransfer = () => {
    const newContactWithCompanyId = newTransferData;
    newContactWithCompanyId.company_id = id;
    if (
      newTransferData.from_contact_id !== '' &&
      newTransferData.no_of_shares !== '' &&
      newTransferData.to_contact_id !== '' &&
      newTransferData.transfer_date !== '' &&
      newTransferData.description_of_shares !== '' &&
      newTransferData.consideration !== '' &&
      newTransferData.director_authorizing_id !== ''
    ) {
      api
        .post('/clients/insertShareTransfer', newContactWithCompanyId)
        .then(() => {
          // const insertedDataId = res.data.data.insertId;
          message('Share inserted successfully.', 'success');
          window.location.reload();
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  //Contact Functions/Methods
  const handleAddNewTransfer = (e) => {
    setNewTransferData({ ...newTransferData, [e.target.name]: e.target.value });
  };

  // insert Share Increase
  const [newIncreaseData, setNewnewIncreaseData] = useState({
    no_of_shares_increased: '',
    consideration_amount: '',
    directors_ordinary_shares: '',
    date: '',
    contact_id: '',
  });

  const AddNewIncrease = () => {
    const newContactWithCompanyId = newIncreaseData;
    newContactWithCompanyId.company_id = id;
    if (
      newIncreaseData.no_of_shares_increased !== '' &&
      newIncreaseData.consideration_amount !== '' &&
      newIncreaseData.directors_ordinary_shares !== '' &&
      newIncreaseData.date !== '' &&
      newIncreaseData.contact_id !== ''
    ) {
      api
        .post('/clients/insertShareIncrease', newContactWithCompanyId)
        .then(() => {
          // const insertedDataId = res.data.data.insertId;
          message('Share inserted successfully.', 'success');
          window.location.reload();
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  //Contact Functions/Methods
  const handleAddNewIncrease = (e) => {
    setNewnewIncreaseData({ ...newIncreaseData, [e.target.name]: e.target.value });
  };

  //  deleteRecord
  const DeleteClient = () => {
    api
      .post('/clients/deleteCompany', { company_id: id })
      .then(() => {
        message('Record editted successfully', 'success');
      })
      .catch(() => {
        message('Unable to delete record.', 'error');
      });
  };

  // Project By Id
  const editProjectById = () => {
    api
      .post('/clients/getProjectsByIdCompany', { company_id: id })
      .then((res) => {
        setProjectDetails(res.data.data);
      })
      .catch(() => {});
  };

  // Invoice By id
  const editInvoiceById = () => {
    api
      .post('/clients/getMainInvoiceByidCompany', { company_id: id })
      .then((res) => {
        setInvoiceDetails(res.data.data);
      })
      .catch(() => {});
  };

  // Tender By id
  const editTenderById = () => {
    api
      .post('/clients/getTendersByIdcompany', { company_id: id })
      .then((res) => {
        setTenderDetails(res.data.data);
      })
      .catch(() => {});
  };
  //Api for getting all countries
  const getAllCountries = () => {
    api
      .get('/clients/getCountry')
      .then((res) => {
        setallCountries(res.data.data);
      })
      .catch(() => {
        message('Country Data Not Found', 'info');
      });
  };

  const getAllNationality = () => {
    api
      .get('/clients/getNationality')
      .then((res) => {
        setallNationality(res.data.data);
      })
      .catch(() => {
        message('Country Data Not Found', 'info');
      });
  };

  // Delete Contact
  const deleteRecord = (staffId) => {
    Swal.fire({
      title: `Are you sure? `,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .post('/clients/deleteContact', { contact_id: staffId })
          .then((res) => {
            console.log(res);
            Swal.fire('Deleted!', 'Contact has been deleted.', 'success');
            message('Record deleted successfully', 'success');
            window.location.reload();
          })
          .catch(() => {
            message('Unable to delete record.', 'error');
          });
      }
    });
  };

  // Delete Transfer
  const deleteRecordTransfer = (staffId) => {
    Swal.fire({
      title: `Are you sure? `,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .post('/clients/deleteShareTransfer', { company_share_transfer_id: staffId })
          .then((res) => {
            console.log(res);
            Swal.fire('Deleted!', 'Contact has been deleted.', 'success');
            message('Record deleted successfully', 'success');
            window.location.reload();
          })
          .catch(() => {
            message('Unable to delete record.', 'error');
          });
      }
    });
  };

  // Delete Increase
  const deleteRecordIncrease = (staffId) => {
    Swal.fire({
      title: `Are you sure? `,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .post('/clients/deleteShareIncrease', { company_share_increase_id: staffId })
          .then((res) => {
            console.log(res);
            Swal.fire('Deleted!', 'Contact has been deleted.', 'success');
            message('Record deleted successfully', 'success');
            window.location.reload();
          })
          .catch(() => {
            message('Unable to delete record.', 'error');
          });
      }
    });
  };

  const getCompanyAddressById = () => {
    api.post('/clients/getCompanyAddress', { company_id: id }).then((res) => {
      setCompanyAddressDetails(res.data.data);
      setAddressDetails(res.data.data[res.data.data.length - 1]);
    });
  };
  const getDirector = () => {
    api
      .post('/clients/getContactPosition', { company_id: id })
      .then((res) => {
        setDirector(res.data.data);
      })
      .catch(() => {
        message('Conatct Data Not Found', 'info');
      });
  };

  //Add payment data
  const [newcompanyaddressDetails, setNewCompanyAddressDetails] = useState({
    company_id: '',
    current_address_flat: '',
    current_address_country: '',
    current_address_po_code: '',
    change_date: '',
  });

  const handleCompanyAddressInputs = (e) => {
    setNewCompanyAddressDetails({ ...newcompanyaddressDetails, [e.target.name]: e.target.value });
  };

  const insertnewcompanyaddress = () => {
    if (
      newcompanyaddressDetails.current_address_flat !== '' &&
      newcompanyaddressDetails.current_address_country !== '' &&
      newcompanyaddressDetails.current_address_po_code !== '' &&
      newcompanyaddressDetails.change_date !== ''
    ) {
      const newAddressWithCompanyId = newcompanyaddressDetails;
      newAddressWithCompanyId.company_id = id;
      newAddressWithCompanyId.previous_address_flat = clientaddressDetails.address_flat;
      api
        .post('/clients/insertCompanyAddress', newAddressWithCompanyId)
        .then(() => {
          if (newAddressWithCompanyId.update_address === '1') {
            api
              .post('/clients/editClientaddress', {
                company_id: id,
                address_flat: newAddressWithCompanyId.current_address_flat,
                address_street: newAddressWithCompanyId.current_address_street,
                address_state: newAddressWithCompanyId.current_address_town,
                address_country: newAddressWithCompanyId.current_address_country,
                address_po_code: newAddressWithCompanyId.current_address_po_code,
              })
              .then(() => {
                message('new address inserted successfully.', 'success');
                //addcompanyaddressToggle(false);
                getCompanyAddressById();
                //setAddressDetails(res.data.data[res.data.data.length - 1]);
                 window.location.reload();
              })
                        }
        })
        .catch(() => {
          message('Network connection error.', 'error');
        }).finally(() => {
          setSubmittings(false); // Reset the submitting state after the API call completes (success or error).
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  const getCompanyNameById = () => {
    api.post('/clients/getCompanyName', { company_id: id }).then((res) => {
      setCompanyNameDetails(res.data.data);
      setNameDetails(res.data.data[res.data.data.length - 1]);
    });
  };

  //Add payment data
  const [newcompanynameDetails, setNewCompanyNameDetails] = useState({
    current_company_name: '',
    meeting_time: '',
    meeting_address_po_code: '',
    meeting_address_country: '',
    meeting_address_flat: '',
    previous_company_name: '',
  });
  //const [updateCompanyName, setUpdateCompanyName] = useState(false);
  const handleCompanyNameInputs = (e) => {
    setNewCompanyNameDetails({ ...newcompanynameDetails, [e.target.name]: e.target.value });
    //console.log("n",newcompanynameDetails);
  };
  const insertnewcompanyname = () => {
    if (
      newcompanynameDetails.meeting_time !== '' &&
      newcompanynameDetails.current_company_name !== ''
    ) {
      const newNameWithCompanyId = newcompanynameDetails;
      newNameWithCompanyId.company_id = id;
      //newNameWithCompanyId.previous_company_name = clientnameDetails.company_name;
      //newNameWithCompanyId.previous_company_name = clientnameDetails.current_company_name;
      if( !newNameWithCompanyId.previous_company_name){
        newNameWithCompanyId.previous_company_name = clientnameDetails.company_name;
      }
      api
        .post('/clients/insertCompanyName', newNameWithCompanyId)

        .then(() => {
          if (newcompanynameDetails.update_company_name === '1') {
            api
              .post('/clients/editClientname', {
                company_id: id,
                company_name: newcompanynameDetails.current_company_name,
              })
              .then(() => {
                message('new name inserted successfully.', 'success');
                getCompanyNameById();
                    window.location.reload();
              })
              .catch(() => {
                message('Network connection error.', 'error');
              });
          }
        }).finally(() => {
          setSubmitting(false); // Reset the submitting state after the API call completes (success or error).
        });
        
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  //attachment for upload file
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
  };

  useEffect(() => {
    editClientsnameById();
    editClientsById();
    editProjectById();
    getContactLinked();
    editInvoiceById();
    editTenderById();
    getAllCountries();
    getAllNationality();
    getShareTransfer();
    getShareIncrease();
    getCompanyAddressById();
    getCompanyNameById();
    getDirector();
  }, [id]);

  const tabs = [
    { id: '1', name: 'Officers/Authorised Representative' },
    { id: '2', name: 'Share Transfer Linked' },
    { id: '3', name: 'Share Increase Linked' },
    { id: '4', name: 'Company Address change' },
    { id: '5', name: 'Company Name Change' },
    { id: '6', name: 'Projects Linked' },
    { id: '7', name: 'Invoice Linked' },
    { id: '8', name: 'Tender Linked' },
    { id: '9', name: 'Attachments' },
    { id: '10', name: 'Add a Note' },
  ];
  const toggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* BreadCrumbs */}
      <BreadCrumbs heading={clientsDetails && clientsDetails.company_name} />
      {/* Button List */}
      <ClientButton
        editClientsData={editClientsData}
        navigate={navigate}
        applyChanges={applyChanges}
        DeleteClient={DeleteClient}
        backToList={backToList}
        sendMail={sendMail}
      ></ClientButton>

      {/* Client Main details */}
      <ComponentCard title="Client Details" creationModificationDate={clientsDetails}>
        <ClientMainDetails
          handleInputs={handleInputs}
          clientsDetails={clientsDetails}
          allCountries={allCountries}
        ></ClientMainDetails>
      </ComponentCard>
      <ClientButtonPdf editClientsData={editClientsData} backToList={backToList}></ClientButtonPdf>

      <ComponentCard>
        <ToastContainer></ToastContainer>
        <Tab toggle={toggle} tabs={tabs} />

        <TabContent className="p-4" activeTab={activeTab}>
          {/* Contact Linked */}
          <TabPane tabId="1">
            <ClientContactGetAndInsert
              setContactData={setContactData}
              setEditContactEditModal={setEditContactEditModal}
              deleteRecord={deleteRecord}
              contactsDetails={contactsDetails}
              addContactToggle={addContactToggle}
              addContactModal={addContactModal}
              handleAddNewContact={handleAddNewContact}
              handleChanges={handleChanges}
              newContactData={newContactData}
              AddNewContact={AddNewContact}
              allNationality={allNationality}
              allCountries={allCountries}
            ></ClientContactGetAndInsert>
            {/* Contact Linked Edit modal */}
            <ContactEditModal
              editContactEditModal={editContactEditModal}
              setEditContactEditModal={setEditContactEditModal}
              contactData={contactData}
              clientsDetails={clientsDetails}
              allNationality={allNationality}
              allCountries={allCountries}
              contactsDetails={contactsDetails}
            />
          </TabPane>
          {/* share transfer */}
          <TabPane tabId="2">
            <ClientShareTrasfer
              setContactDatas={setContactDatas}
              setEditContactEditModals={setEditContactEditModals}
              deleteRecordTransfer={deleteRecordTransfer}
              director={director}
              transferDetails={transferDetails}
              addContactToggles={addContactToggles}
              addContactModals={addContactModals}
              handleAddNewTransfer={handleAddNewTransfer}
              newTransferData={newTransferData}
              AddNewTransfer={AddNewTransfer}
              contactsDetails={contactsDetails}
            ></ClientShareTrasfer>
            {/* Transfer edit */}
            <ContactShareTransfer
              editContactEditModals={editContactEditModals}
              setEditContactEditModals={setEditContactEditModals}
              contactDatas={contactDatas}
              contactsDetails={contactsDetails}
            ></ContactShareTransfer>
          </TabPane>
          {/* share Increase */}
          <TabPane tabId="3">
            <ClientShareIncrease
              setContactDatass={setContactDatass}
              setEditContactEditModalss={setEditContactEditModalss}
              deleteRecordIncrease={deleteRecordIncrease}
              increaseDetails={increaseDetails}
              addContactToggless={addContactToggless}
              addContactModalss={addContactModalss}
              handleAddNewIncrease={handleAddNewIncrease}
              newIncreaseData={newIncreaseData}
              AddNewIncrease={AddNewIncrease}
              director={director}
            ></ClientShareIncrease>
            {/* Increase Edit */}
            <ContactShareIncrease
              editContactEditModalss={editContactEditModalss}
              setEditContactEditModalss={setEditContactEditModalss}
              contactDatass={contactDatass}
              director={director}
            ></ContactShareIncrease>
          </TabPane>
          {/* Company Address change */}
          <TabPane tabId="4">
            <CompanyAddressChange
              clientaddressDetails={clientaddressDetails}
              allCountries={allCountries}
              setCompanyAddressData={setCompanyAddressData}
              companyaddressDetails={companyaddressDetails}
              addressDetails={addressDetails}
              addcompanyaddressToggle={addcompanyaddressToggle}
              addCompanyaddressModal={addCompanyaddressModal}
              setCompanyAddressEditModal={setCompanyAddressEditModal}
              handleCompanyAddressInputs={handleCompanyAddressInputs}
              newcompanyaddressDetails={newcompanyaddressDetails}
              insertnewcompanyaddress={insertnewcompanyaddress}
              submittings={submittings}
              setSubmittings={setSubmittings}
            ></CompanyAddressChange>
            {/* Company Address change Edit */}
            <ClientCompanyAddressEdit
              allCountries={allCountries}
              setCompanyAddressEditModal={setCompanyAddressEditModal}
              companyaddressEditModal={companyaddressEditModal}
              companyAddressData={companyAddressData}
              getCompanyAddressById={getCompanyAddressById}
              id={id}
            ></ClientCompanyAddressEdit>
          </TabPane>
          {/* CompanyName Changes */}
          <TabPane tabId="5">
            <CompanyNameChange
              clientsDetails={clientsDetails}
              clientnameDetails={clientnameDetails}
              setCompanyNameData={setCompanyNameData}
              allCountries={allCountries}
              nameDetails={nameDetails}
              companynameDetails={companynameDetails}
              addcompanynameToggle={addcompanynameToggle}
              addCompanynameModal={addCompanynameModal}
              setCompanyNameEditModal={setCompanyNameEditModal}
              handleCompanyNameInputs={handleCompanyNameInputs}
              newcompanynameDetails={newcompanynameDetails}
              insertnewcompanyname={insertnewcompanyname}
              submitting={submitting}
              setSubmitting={setSubmitting}
            ></CompanyNameChange>
            {/* Company Address change Edit */}
            <ClientCompanyNameEdit
              allCountries={allCountries}
              setCompanyNameEditModal={setCompanyNameEditModal}
              companynameEditModal={companynameEditModal}
              companyNameData={companyNameData}
              getCompanyNameById={getCompanyNameById}
              id={id}
              
            ></ClientCompanyNameEdit>
          </TabPane>
          {/* clientProject */}
          <TabPane tabId="6">
            <ClientProjectDataGet projectDetails={projectDetails}></ClientProjectDataGet>
          </TabPane>
          {/* ClientInvoice */}
          <TabPane tabId="7">
            <ClientInvoiceDataGet invoiceDetails={invoiceDetails}></ClientInvoiceDataGet>
          </TabPane>
          {/* ClientTender */}
          <TabPane tabId="8">
            <ClientTenderDataGet tenderDetails={tenderDetails}></ClientTenderDataGet>
          </TabPane>
          {/* Attachments */}
          <TabPane tabId="9">
            <ComponentCard title="Attachments">
              <Row>
                <Col xs="12" md="3" className="mb-3">
                  <Button
                    className="shadow-none"
                    color="primary"
                    onClick={() => {
                      setRoomName('Client');
                      setFileTypes(['JPG', 'PNG', 'GIF', 'PDF']);
                      dataForAttachment();
                      setAttachmentModal(true);
                    }}
                  >
                    <Icon.File className="rounded-circle" width="20" />
                  </Button>
                </Col>
              </Row>
              <AttachmentModalV2
                moduleId={id}
                attachmentModal={attachmentModal}
                setAttachmentModal={setAttachmentModal}
                roomName={RoomName}
                fileTypes={fileTypes}
                altTagData="ClientRelated Data"
                desc="Client Related Data"
                recordType="RelatedPicture"
                mediaType={attachmentData.modelType}
                update={update}
              setUpdate={setUpdate}
              />
              <ViewFileComponentV2 moduleId={id} roomName="Client" recordType="RelatedPicture" update={update}
              setUpdate={setUpdate}/>
            </ComponentCard>
          </TabPane>
          {/* ADD NOTE */}
          <TabPane tabId="10">
            <ComponentCard title="Add a note">
              <AddNote recordId={id} roomName="AccountEdit" />
              <ViewNote recordId={id} roomName="AccountEdit" />
            </ComponentCard>
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};
export default ClientsEdit;
