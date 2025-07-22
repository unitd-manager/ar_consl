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

const ReceiptEdit = () => {
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
    navigate('/Receipt');
  };
//  Get section by id
  const editSectionyId = () => {
    api
      .post('/section/getreceiptById', { receipt_id: id })
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
      .post('/section/deleteSection', { section_id: id })
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
     <BreadCrumbs heading={section && section.company_name} />
    {/* Button */}
      <SectionButton editSectionData={editSectionData}navigate={navigate}applyChanges={applyChanges}DeleteSection={DeleteSection}backToList={backToList} id={id}></SectionButton>
     
      {/* Main Details */}
      <Form>
        <FormGroup>
        <ComponentCard
            title="Receipt Details"
            creationModificationDate={section}
          
          > 
            <Row>
              
              <Col md="4">
                <FormGroup>
                  <Label>Receipt Code<span className='required'> *</span></Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={section && section.receipt_code}
                    name="receipt_code"/>
                </FormGroup>
              </Col>
               <Col md="4">
                <FormGroup>
                  <Label>Amount</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={section && section.amount}
                    name="amount"/>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Mode Of Payment</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={section && section.mode_of_payment}
                    name="mode_of_payment"
                  >
                    <option defaultValue="selected">
                      Please Select
                    </option>
                    {valuelist &&
                      valuelist.map((e) => {
                        return <option key={e.value} value={e.value}>{e.value}</option>;
                      })}
                  </Input>
                </FormGroup>
              </Col>
                <Col md="4">
                <FormGroup>
                  <Label>Status</Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={section && section.status}
                    name="status"
                  >
                    <option defaultValue="selected">
                      Please Select
                    </option>
                    {valuelist &&
                      valuelist.map((e) => {
                        return <option key={e.value} value={e.value}>{e.value}</option>;
                      })}
                  </Input>
                </FormGroup>
              </Col>
              
              <Col md="4">
                <FormGroup>
                  <Label>Receipt Date</Label>
                  <Input
                    type="date"
                    onChange={handleInputs}
                    value={section && section.receipt_date}
                    name="receipt_date"/>
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
export default ReceiptEdit;
