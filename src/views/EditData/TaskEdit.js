import React, { useEffect, useState } from 'react';
import {Row,Col,Form,FormGroup,Label,Input,Button,Nav,NavItem,NavLink,TabContent, TabPane} from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
// import SectionCreationModification from '../../components/SectionTable/SectionCreationModification';
import ComponentCard from '../../components/ComponentCard';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import AttachmentModalV2 from '../../components/tender/AttachmentModalV2';
import message from '../../components/Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import api from '../../constants/api';
import SectionButton from '../../components/SectionTable/SectionButton';
import creationdatetime from '../../constants/creationdatetime';

const TaskEdit = () => {
  //Const Variables
  const [section, setSection] = useState();
  const [activeTab, setActiveTab] = useState('1');
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [RoomName, setRoomName] = useState('')
  const [fileTypes, setFileTypes] = useState('')
  const [valuelist, setValuelist] = useState();
  const [projectList, setProjectList] = useState([]);
  const [staffList, setStaffList] = useState([]);
 
    const [attachmentData, setDataForAttachment] = useState({
      modelType: '',
    });
    
      const [update, setUpdate] = useState(false);
     // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  //  toggle Expense
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
 console.log('valuelist',valuelist);
  // Abi for Picture attachment
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
  };

console.log('projectlist',projectList);
console.log('stafflist',staffList);

  //  button position
  const applyChanges = () => {};

  const backToList = () => {
    navigate('/Task');
  };
//  Get section by id
  const editSectionyId = () => {
    api
      .post('/task/getTaskById', { task_id: id })
      .then((res) => {
        setSection(res.data.data[0]);
      })
      .catch(() => {
        message('Section Data Not Found', 'info');
      });
  };
  //Section Functions/Methods
  const handleInputs = (e) => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };
  //Logic for section edit data in db
  const editSectionData = () => {
    if(section.title !== ''){
      section.modification_date = creationdatetime
    api
      .post('/task/updateTask', section)
      .then(() => {
        message('Record editted successfully', 'success');
        editSectionyId();
      })

        
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
    }else{
      message('Please fill all required fields','warning');
      }
  };
  // delete section
  const DeleteSection = () => {
    api
      .post('/section/deleteSection', { task_id: id })
      .then(() => {
        message('Record editted successfully', 'success');
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
  };
  //Api call for getting valuelist dropdown
  const getValuelist = () => {
    api
      .get('/section/getValueList')
      .then((res) => {
        setValuelist(res.data.data);
      })
      .catch(() => {
        message('valuelist not found', 'info');
      });
  };

  // Fetch dropdowns
  const getDropdowns = () => {
    api.get('/task/getProjects').then((res) =>{ setProjectList(res.data.data);
console.log('projectres',res.data.data);}).catch(() => {
       
      })
      ;
    api.get('/task/getStaff').then((res) =>{ setStaffList(res.data.data);
console.log('projectres',res.data.data);}).catch(() => {
        
       
      });
  };

  useEffect(() => {
    getDropdowns();
  }, [id]);

  useEffect(() => {
    editSectionyId();
    getValuelist();
  }, [id]);

  return (
    <> 
     <BreadCrumbs heading={section && section.task_title} />
    {/* Button */}
      <SectionButton editSectionData={editSectionData}navigate={navigate}applyChanges={applyChanges}DeleteSection={DeleteSection}backToList={backToList} id={id}></SectionButton>
     
      {/* Main Details */}
      <Form>
        <FormGroup>
        <ComponentCard
            title="Task Details"
            creationModificationDate={section}
          
          > 
            <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>Project Code</Label>
                    <Input type="text" name="task_code" value={section?.task_code || ''} disabled />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Task Title</Label>
                    <Input type="text" name="title" value={section?.title || ''} onChange={handleInputs} />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Project</Label>
                    <Input type="select" name="project_id" value={section?.project_id || ''} onChange={handleInputs}>
                      <option value="">Please Select</option>
                      {projectList?.map((project) => (
                        <option key={project.project_id} value={project.project_id}>
                          {project.title}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Project Manager</Label>
                    <Input
                      type="select"
                      name="project_manager_id"
                      value={section?.project_manager_id || ''}
                      onChange={handleInputs}
                    >
                      <option value="">Please Select</option>
                      {staffList?.map((staff) => (
                        <option key={staff.staff_id} value={staff.staff_id}>
                          {staff.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
           <Col md="4">
  <FormGroup tag="fieldset">
    <Label>Alert Staff by Email</Label>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="staff_alert"
          value="1"
          checked={section?.staff_alert === 1 || section?.staff_alert === '1'}
          onChange={ handleInputs}
        />
        Yes
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="staff_alert"
          value="0"
          checked={section?.staff_alert === 0 || section?.staff_alert === '0'}
           onChange={ handleInputs}
        />
        No
      </Label>
    </FormGroup>
  </FormGroup>
</Col>


    <Col md="4">
  <FormGroup tag="fieldset">
    <Label>Alert Project Manager when complete?</Label>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="project_manager_alert"
          value="1"
          checked={section?.project_manager_alert === 1 || section?.project_manager_alert === '1'}
            onChange={ handleInputs}
        />
        Yes
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="project_manager_alert"
          value="0"
          checked={section?.project_manager_alert === 0 || section?.project_manager_alert === '0'}
            onChange={ handleInputs}
        />
        No
      </Label>
    </FormGroup>
  </FormGroup>
</Col>


                <Col md="4">
                  <FormGroup>
                    <Label>Due Date</Label>
                    <Input
                      type="date"
                      name="due_date"
                      value={section?.due_date?.split('T')[0] || ''}
                      onChange={handleInputs}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Estimated Hours</Label>
                    <Input
                      type="number"
                      name="estimated_hours"
                      value={section?.estimated_hours || ''}
                      onChange={handleInputs}
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Category</Label>
                    <Input
                      type="text"
                      name="category"
                      value={section?.category || ''}
                      onChange={handleInputs}
                    />
                  </FormGroup>
                </Col>
             
<Col md="4">
  <FormGroup >
    <Label>Chargeable</Label>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="chargeable"
          value="1"
          checked={section?.chargeable === 1 || section?.chargeable === '1'}
            onChange={ handleInputs}
        />
        Yes
      </Label>
    </FormGroup>
    <FormGroup check>
      <Label check>
        <Input
          type="radio"
          name="chargeable"
          value="0"
          checked={section?.chargeable === 0 || section?.chargeable === '0'}
            onChange={ handleInputs}
        />
        No
      </Label>
    </FormGroup>
  </FormGroup>
</Col>
                <Col md="4">
                  <FormGroup>
                    <Label>Status</Label>
                    <Input
                      type="text"
                      name="status"
                      value={section?.status || ''}
                      onChange={handleInputs}
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      value={section?.description || ''}
                      onChange={handleInputs}
                    />
                  </FormGroup>
                </Col>
              </Row>
           

          </ComponentCard>
        </FormGroup>
      </Form>
{/* Creation and Modification date & time */}
      {/* <ComponentCard>
      <SectionCreationModification section={section}></SectionCreationModification>
      </ComponentCard> */}
      {/* Tab start */}
      <ComponentCard>
        <ToastContainer></ToastContainer>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' ? 'active' : ''}
              onClick={() => {
                toggle('1');
              }}>Attachment
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="p-4" activeTab={activeTab}>
         <TabPane tabId="1">
            <Form>
              <FormGroup>
                <Row>
                  <Col xs="12" md="3" className="mb-3">
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={() => {
                        setRoomName('Task');
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
                  altTagData="Task Data"
                  desc="LeaveRelated Data"
                  recordType="RelatedPicture"
                  mediaType={attachmentData.modelType}
                  update={update}
                  setUpdate={setUpdate}
                />
                <ViewFileComponentV2
                  moduleId={id}
                  roomName="Task"
                  recordType="RelatedPicture"
                  update={update}
                  setUpdate={setUpdate}
                />
              </FormGroup>
            </Form>
          </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};
export default TaskEdit;
