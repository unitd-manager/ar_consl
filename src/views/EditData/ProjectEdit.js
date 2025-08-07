import React, { useState, useEffect } from 'react';
import { Row, Col, TabContent, TabPane, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import QuotationMoreDetails from '../../components/ProjectModal/QuotationMoreDetails';
// import CreateFinance from '../../components/ProjectModal/CreateFinance';
import Tab from '../../components/Project/Tab';
import AttachmentModalV2 from '../../components/tender/AttachmentModalV2';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import FinanceTab from '../../components/ProjectModal/FinanceTab';
import message from '../../components/Message';
import api from '../../constants/api';
import ProjectButton from '../../components/ProjectTable/ProjectButton';
import ProjectMainDetails from '../../components/ProjectTable/ProjectMainDetails';
import ProjectTaskTab from '../../components/ProjectTable/ProjectTaskTab';
import ProjectEditTaskModel from '../../components/ProjectTable/ProjectEditTaskModel';
import ProjectEmployeeLinked from '../../components/ProjectTable/ProjectEmployeeLinked';

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applyChanges = () => {};
  const backToList = () => {
    navigate('/Project');
  };

  const [projectDetail, setProjectDetail] = useState();
  const [activeTab, setActiveTab] = useState('1');
  const [contactData, setContactDatas] = useState();
  const [quotationsModal, setquotationsModal] = useState(false);
  const [editTaskEditModals, setEditTaskEditModals] = useState(false);
  const [viewLineModal, setViewLineModal] = useState(false);
  const [addLineItemModal, setAddLineItemModal] = useState(false);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [addContactModals, setAddContactModals] = useState(false);
  const [quotation, setQuotation] = useState({});
  const [contact, setcontact] = useState();
  const [company, setCompany] = useState();
  const [taskDetails, setTaskDetails] = useState();
  const [lineItem, setLineItem] = useState([]);
  const [RoomName, setRoomName] = useState('');
  const [fileTypes, setFileTypes] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState();
  const [incharge, setIncharge] = useState();
  const [update, setUpdate] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    quote_date: '',
    quote_code: '',
  });

  const tabs = [
    { id: '1', name: 'Task' },
    { id: '2', name: 'Employee Linked' },
    { id: '3', name: 'Quotations' },
    { id: '4', name: 'Invocie' },
    { id: '5', name: 'Attachments' },
  ];
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  const addContactToggles = () => {
    setAddContactModals(!addContactModals);
  };
  const viewLineToggle = () => {
    setViewLineModal(!viewLineModal);
  };
  //  AttachmentModal
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });

  //attachment for upload file
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
  };
  const handleQuoteForms = (ele) => {
    setQuoteForm({ ...quoteForm, [ele.target.name]: ele.target.value });
  };

  // Get Project By Id

  const getProjectById = () => {
    api
      .post('/project/getProjectById', { project_id: id })
      .then((res) => {
        setProjectDetail(res.data.data);
      })
      .catch(() => {});
  };
  const getContact = () => {
    api
      .post('/project/getContactLinkedByProjectId', { project_id: id })
      .then((res) => {
        setcontact(res.data.data);
      })
      .catch(() => {
       // message('Conatct Data Not Found', 'info');
      });
  };
  // Edit Project

  const handleInputs = (e) => {
    setProjectDetail({ ...projectDetail, [e.target.name]: e.target.value });
  };

  const UpdateData = () => {
    api
      .post('/project/edit-Project', projectDetail)
      .then(() => {
        message('Record editted successfully', 'success');
      })
      .catch(() => {});
  };

  const getQuotations = () => {
    api.post('/project/getTabQuoteById', { project_id: id }).then((res) => {
      setQuotation(res.data.data);
    });
  };

  const getCompany = () => {
    api
      .get('/project/getCompany')
      .then((res) => {
        setCompany(res.data.data);
        console.log(res.data.data);
      })
      .catch(() => {
       // message('No Incharge found', 'info');
      });
  };
  const getTaskById = () => {
    api
      .post('/project/getTaskByID', { project_id: id })
      .then((res) => {
        setTaskDetails(res.data.data);
      })
      .catch(() => {});
  };

  const getEmployeeById = () => {
    api
      .post('/project/getEmployeeByID', { project_id: id })
      .then((res) => {
        setEmployeeDetails(res.data.data);
      })
      .catch(() => {});
  };
  console.log('lineitem3', lineItem);

  // Get Line Item
  const getLineItem = (quotationId) => {
    api.post('/project/getQuoteLineItemsById', { quote_id: quotationId }).then((res) => {
      setLineItem(res.data.data);
      console.log('lineItem', res.data.data);

      //setViewLineModal(true);
    });
  };

  // insert Share Transfer
  const [newTaskData, setNewTaskData] = useState({
    title: '',
    status: '',
    category: '',
    staff_alert: '',
    project_manager_alert: '',
    due_date: '',
    project_manager_id: '',
    description: '',
    select_date: '',
  });

  const AddNewTask = () => {
    const newContactWithCompanyId = newTaskData;
    newContactWithCompanyId.project_id = id;
    console.log('taskto add', newContactWithCompanyId);
    api
      .post('/project/insertTask', newContactWithCompanyId)
      .then(() => {
        // const insertedDataId = res.data.data.insertId;
        message('Task inserted successfully.', 'success');
        //window.location.reload();
      })
      .catch(() => {
        message('Network connection error.', 'error');
      });
  };

  //Contact Functions/Methods
  const handleAddNewTask = (e) => {
    setNewTaskData({ ...newTaskData, [e.target.name]: e.target.value });
  };

  //Delete Transfer
  const deleteRecordTask = (staffId) => {
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
          .post('/project/deleteTask', { task_id: staffId })
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
  const insertQuote = (code) => {
    const newQuoteId = quoteForm;
    newQuoteId.project_id = id;
    newQuoteId.quote_code = code;
     
        api.post('/project/insertquote', newQuoteId).then(() => {
          message('Quote inserted successfully.', 'success');
          window.location.reload();
        });
      };
  //QUTO GENERATED CODE
  const generateCode = () => {
    api
      .post('/tender/getCodeValue', { type: 'quote' })
      .then((res) => {
        insertQuote(res.data.data);
      })
      .catch(() => {
        insertQuote('');
      });
  };
  const getIncharge = () => {
    api
      .get('/tender/projectIncharge')
      .then((res) => {
        setIncharge(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getProjectById();
    getContact();
    getCompany();
    getQuotations();
    getTaskById();
    getEmployeeById();
    getIncharge();
  }, [id]);

  return (
    <>
      <BreadCrumbs />
      <ProjectButton
        UpdateData={UpdateData}
        navigate={navigate}
        applyChanges={applyChanges}
        backToList={backToList}
      ></ProjectButton>
      <ProjectMainDetails
        handleInputs={handleInputs}
        projectDetail={projectDetail}
        contact={contact}
        company={company}
        incharge={incharge}
      ></ProjectMainDetails>

      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>
        {/* Tab 1 */}
        <Tab toggle={toggle} tabs={tabs} />
        <TabContent className="p-4" activeTab={activeTab}>
          <TabPane tabId="1">
            <ProjectTaskTab
              setContactDatas={setContactDatas}
              setEditTaskEditModals={setEditTaskEditModals}
              deleteRecordTask={deleteRecordTask}
              taskDetails={taskDetails}
              addContactToggles={addContactToggles}
              addContactModals={addContactModals}
              handleAddNewTask={handleAddNewTask}
              newTaskData={newTaskData}
              AddNewTask={AddNewTask}
              contact={contact}
              incharge={incharge}
              employeeDetails={employeeDetails}
            ></ProjectTaskTab>
            <ProjectEditTaskModel
              editTaskEditModals={editTaskEditModals}
              setEditTaskEditModals={setEditTaskEditModals}
              contactData={contactData}
              contact={contact}
              employeeDetails={employeeDetails}
            ></ProjectEditTaskModel>
          </TabPane>
          <TabPane tabId="2">
            <ProjectEmployeeLinked projectId={id}></ProjectEmployeeLinked>
          </TabPane>
          <TabPane tabId="3">
            <Row className="mb-4">
              {Object.keys(quotation).length === 0 && (
                <Col md="2">
                  <Button
                    color="primary"
                    className="shadow-none"
                    onClick={(ele) => {
                      if (
                        window.confirm(
                          'Do you Like to Add Quote ?',
                        )
                      ) {
                      handleQuoteForms(ele);
                      generateCode(ele);
                    }}
                  }
                  >
                    Add Quote
                  </Button>
                </Col>
              )}
            </Row>
            <QuotationMoreDetails
              id={id}
              addLineItemModal={addLineItemModal}
              setAddLineItemModal={setAddLineItemModal}
              viewLineModal={viewLineModal}
              viewLineToggle={viewLineToggle}
              lineItem={lineItem}
              getLineItem={getLineItem}
              quotationsModal={quotationsModal}
              setquotationsModal={setquotationsModal}
              quotation={quotation}
              setViewLineModal={setViewLineModal}
            ></QuotationMoreDetails>
          </TabPane>
          <TabPane tabId="4">
            <FinanceTab projectId={id} projectDetail={projectDetail}></FinanceTab>
          </TabPane>

          <TabPane tabId="5">
            <Row>
              <Col xs="12" md="3" className="mb-3">
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    setRoomName('Tender');
                    setFileTypes(['JPG', 'JPEG', 'PNG', 'GIF', 'PDF']);
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
              altTagData="TenderRelated Data"
              desc="TenderRelated Data"
              recordType="RelatedPicture"
              mediaType={attachmentData.modelType}
              update={update}
              setUpdate={setUpdate}
            />
            <ViewFileComponentV2 moduleId={id} roomName="Tender" recordType="RelatedPicture" update={update}
                    setUpdate={setUpdate} />
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};

export default ProjectEdit;
