import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Modal,
  CardTitle,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../ComponentCard';
import ComponentCardV2 from '../ComponentCardV2';
import message from '../Message';
import api from '../../constants/api';
import JobInformationKeyDetails from '../JobInformationModal.js/JobInformationKeyDetails';
import JobProbationModal from '../JobInformationModal.js/JobProbationModal';
import JobWorkingHoursModal from '../JobInformationModal.js/JobWorkingHoursModal';
import JobSalaryModal from '../JobInformationModal.js/JobSalaryModal';
import JobInformationSalaryModal from '../JobInformationModal.js/JobInformationSalaryModal';
import JobTermination from '../JobInformationModal.js/JobRTerminationModal';
import JobLeave from '../JobInformationModal.js/JobLeaveModal';
import JobBank from '../JobInformationModal.js/JobBank';

const JobInformation = ({ JobInformationEditModal, setJobInformationEditModal }) => {
  JobInformation.propTypes = {
    JobInformationEditModal: PropTypes.bool,
    setJobInformationEditModal: PropTypes.func,
  };

  const [activeTab, setActiveTab] = useState('1');
  const [jobModal, setJobModal] = useState();
  const { id } = useParams();
  const [overTimeRateModal, setOverTimeRateModal] = useState('');
  const [allBankModal, setAllBankModal] = useState();

  const editJobByIds = () => {
    api.post('/jobinformation/EditjobinformationById', { job_information_id: id })
      .then((res) => setJobModal(res.data.data[0]))
      .catch(() => message('JobInformation Data Not Found', 'info'));
  };

  const handleInputs = (e) => {
    setJobModal({ ...jobModal, [e.target.name]: e.target.value });
  };

  const handleInputsRadio = (radioVal, overtimeRate, basicPay) => {
    if (!basicPay) basicPay = 0;
    if (!overtimeRate) overtimeRate = 0;
    setOverTimeRateModal(
      radioVal === '1' ? (parseFloat(basicPay) / 30) * (1 / 8) * parseFloat(overtimeRate) : 0
    );
  };

  const editJobInformationData = () => {
    if (jobModal.working_days && jobModal.basic_pay && jobModal.join_date && jobModal.govt_donation) {
      jobModal.overtime_pay_rate = overTimeRateModal;
      api.post('/jobinformation/edit-jobinformation', jobModal)
        .then(() => message('Record editted successfully', 'success'))
        .catch(() => message('Unable to edit record.', 'error'));
    } else {
      message('Please fill all required fields.', 'error');
    }
  };

  const BankDetails = () => {
    api.get('/bank/getBank')
      .then((res) => setAllBankModal(res.data.data))
      .catch(() => message('JobInformation Data Not Found', 'info'));
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const insertJobInformationData = () => {
    Swal.fire({
      title: `Are you sure? ${id}`,
      text: 'Do you wish to duplicate the job information',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/jobinformation/edit-jobinformation', { job_information_id: id })
          .then(() => {
            Swal.fire('Your Job Information duplicated successfully', 'success');
            editJobInformationData();
          });
      }
    });
  };

  useEffect(() => {
    editJobByIds();
    BankDetails();
  }, [id]);

  return (
    <Modal size="lg" isOpen={JobInformationEditModal}>
      <CardTitle>Step 1 (Job Information)</CardTitle>
      <BreadCrumbs />
      <CardTitle>
        <Label>Employee Name:</Label> {jobModal && jobModal.employee_name}
      </CardTitle>
      <CardTitle>
        {jobModal && !jobModal.fin_no && (
          <>
            <Label>NRIC No:</Label> {jobModal.nric_no}<br />
          </>
        )}
        {jobModal && jobModal.fin_no && (
          <>
            <Label>FIN No:</Label> {jobModal.fin_no}
          </>
        )}
      </CardTitle>
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button color="primary" onClick={editJobInformationData} className="shadow-none">Save</Button>
              </Col>
              <Col>
                <Button color="primary" onClick={editJobInformationData} className="shadow-none">Apply</Button>
              </Col>
              <Col>
                <Button color="secondary" onClick={() => setJobInformationEditModal(false)} className="shadow-none">Back to List</Button>
              </Col>
              <Col>
                <Button color="dark" onClick={() => insertJobInformationData(id)} className="shadow-none">Duplicate</Button>
              </Col>
            </Row>
          </ComponentCardV2>
          <ComponentCard title="Details of Employment (KET)">
            <ToastContainer />
            <JobInformationKeyDetails handleInputs={handleInputs} jobModal={jobModal} />
          </ComponentCard>
          <Nav tabs>
            {['Working hours', 'Leave and Medical', 'Probation Details (KET)', 'Salary Information', 'CPF Information', 'Bank Information', 'Termination Information'].map((tabLabel, index) => (
              <NavItem key={id}>
                <NavLink className={activeTab === `${index + 1}` ? 'active' : ''} onClick={() => toggle(`${index + 1}`)}>{tabLabel}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent className="p-4" activeTab={activeTab}>
            <TabPane tabId="1">
              <ComponentCard title="Working hours & Rest Days (KET)">
                <JobWorkingHoursModal handleInputs={handleInputs} jobModal={jobModal} />
              </ComponentCard>
            </TabPane>
            <TabPane tabId="2">
              <JobLeave handleInputs={handleInputs} jobModal={jobModal} />
            </TabPane>
            <TabPane tabId="3">
              <ComponentCard title="Probation Details (KET)">
                <JobProbationModal handleInputs={handleInputs} jobModal={jobModal} />
              </ComponentCard>
            </TabPane>
            <TabPane tabId="4">
              <ComponentCard title="Salary Information">
                <JobInformationSalaryModal handleInputs={handleInputs} handleInputsRadio={handleInputsRadio} jobModal={jobModal} />
              </ComponentCard>
            </TabPane>
            <TabPane tabId="5">
              <ComponentCard title="CPF Information">
                <JobSalaryModal handleInputs={handleInputs} jobModal={jobModal} />
              </ComponentCard>
            </TabPane>
            <TabPane tabId="6">
              <JobBank handleInputs={handleInputs} jobModal={jobModal} allBankModal={allBankModal} />
            </TabPane>
            <TabPane tabId="7">
              <JobTermination handleInputs={handleInputs} jobModal={jobModal} />
            </TabPane>
          </TabContent>
        </FormGroup>
      </Form>
    </Modal>
  );
};

export default JobInformation;
