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
  const [pictureData, setDataForPicture] = useState({
    modelType: '',
  }); 
     // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  //  toggle Expense
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
 
  // Abi for Picture attachment
  const dataForPicture = () => {
    setDataForPicture({
      modelType: 'picture',
    });
  };

  //  button position
  const applyChanges = () => {};

  const backToList = () => {
    navigate('/Task');
  };
//  Get section by id
  const editSectionyId = () => {
    api
      .post('/section/getreceiptById', { task_id: id })
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
    if(section.section_title !== ''){
      section.modification_date = creationdatetime
    api
      .post('/section/editSection', section)
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
      <Input type="text" name="project_code" value={section?.project_code || ''} disabled />
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Task Title</Label>
      <Input type="text" name="task_title" value={section?.task_title || ''} onChange={handleInputs} />
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Project</Label>
      <Input type="select" name="project" value={section?.project || ''} onChange={handleInputs}>
        <option>Please Select</option>
        {valuelist?.map((e) => (
          <option key={e.value} value={e.value}>{e.value}</option>
        ))}
      </Input>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Project Manager</Label>
      <Input type="select" name="project_manager" value={section?.project_manager || ''} onChange={handleInputs}>
        <option>Please Select</option>
        {valuelist?.map((e) => (
          <option key={e.value} value={e.value}>{e.value}</option>
        ))}
      </Input>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Alert Staff by Email</Label><br />
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="alert_staff" value="Yes" checked={section?.alert_staff === 'Yes'} onChange={handleInputs} /> Yes
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="alert_staff" value="No" checked={section?.alert_staff === 'No'} onChange={handleInputs} /> No
        </Label>
      </FormGroup>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Alert Project Manager when complete?</Label><br />
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="alert_pm" value="Yes" checked={section?.alert_pm === 'Yes'} onChange={handleInputs} /> Yes
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="alert_pm" value="No" checked={section?.alert_pm === 'No'} onChange={handleInputs} /> No
        </Label>
      </FormGroup>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Due Date</Label>
      <Input type="date" name="due_date" value={section?.due_date || ''} onChange={handleInputs} />
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Estimated Hours</Label>
      <Input type="text" name="estimated_hours" value={section?.estimated_hours || ''} onChange={handleInputs} />
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Category</Label>
      <div className="d-flex gap-2">
        <Input type="select" name="category" value={section?.category || ''} onChange={handleInputs}>
          <option>Others</option>
          {valuelist?.map((e) => (
            <option key={e.value} value={e.value}>{e.value}</option>
          ))}
        </Input>
        <Button color="secondary">Add</Button>
      </div>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Chargeable</Label><br />
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="chargeable" value="Yes" checked={section?.chargeable === 'Yes'} onChange={handleInputs} /> Yes
        </Label>
      </FormGroup>
      <FormGroup check inline>
        <Label check>
          <Input type="radio" name="chargeable" value="No" checked={section?.chargeable === 'No'} onChange={handleInputs} /> No
        </Label>
      </FormGroup>
    </FormGroup>
  </Col>

  <Col md="4">
    <FormGroup>
      <Label>Status</Label>
      <div className="d-flex gap-2">
        <Input type="text" name="status" value={section?.status || ''} onChange={handleInputs} />
        <Button color="secondary">Add</Button>
      </div>
    </FormGroup>
  </Col>

  <Col md="12">
    <FormGroup>
      <Label>Description</Label>
      <Input type="textarea" name="description" value={section?.description || ''} onChange={handleInputs} />
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
              }}>Picture
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
                    setRoomName('ReceiptPic')
                    setFileTypes(["JPG", "PNG", "GIF"]);
                    dataForPicture();
                    setAttachmentModal(true);}}><Icon.Image className="rounded-circle" width="20" /></Button>
              </Col>
            </Row>
            <AttachmentModalV2
              moduleId={id}
              attachmentModal={attachmentModal}
              setAttachmentModal={setAttachmentModal}
              roomName={RoomName}
              fileTypes={fileTypes}
              altTagData="Receipt Data"
              desc="Receipt Data"
              recordType="Picture"
              mediaType={pictureData.modelType}
            />
            <ViewFileComponentV2 moduleId={id} roomName="ReceiptPic" recordType="Picture" />
        </FormGroup>
      </Form>
            </TabPane>
        </TabContent>
      </ComponentCard>
    </>
  );
};
export default TaskEdit;
