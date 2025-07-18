import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';
import api from '../../constants/api';
import message from '../Message';
import { jicolumns, tlcolumns } from '../../data/PayrollHR/Employee';
import AddNote from '../tender/AddNote';
import ViewNote from '../tender/ViewNote';

function LinkedPortalsTab({ id }) {
  LinkedPortalsTab.propTypes = {
    id: PropTypes.any,
  };

  const [jobInformationHistoryDetails, setJobInformationHistoryDetails] = useState([]);
  const [trainingLinkedDetails, setTrainingLinkedDetails] = useState([]);

  // Fetch Job Information History
  const getJobInformationHistoryData = () => {
    api
      .post('/employeeModule/TabJobInformationHistoryById', { employee_id: id })
      .then((res) => {
        setJobInformationHistoryDetails(res.data.data);
      })
      .catch(() => {
        message('Job info history data not found', 'info');
      });
  };

  // Fetch Training Linked Data
  const getTrainingLinkedData = () => {
    api
      .post('/employeeModule/getTabTrainingLinkedByEmpId', { employee_id: id })
      .then((res) => {
        setTrainingLinkedDetails(res.data.data);
      })
      .catch(() => {
        message('Training linked data not found', 'info');
      });
  };

  useEffect(() => {
    getJobInformationHistoryData();
    getTrainingLinkedData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <Row style={{ alignItems: 'flex-start' }}>
        <Col md="6">
          <ComponentCard title="Job Information History">
            <Table id="examplepl" className="display">
              <thead>
                <tr>
                  {jicolumns.map((cell) => (
                    <td key={cell.name}>{cell.name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobInformationHistoryDetails &&
                  jobInformationHistoryDetails.map((element) => (
                    <tr key={element.job_information_id}>
                      <td>{element.job_information_id}</td>
                      <td>{element.basic_pay}</td>
                      <td>{element.start_date}</td>
                      <td>{element.end_date}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </ComponentCard>
        </Col>
        <Col md="6">
          <ComponentCard title="Training Linked">
            <Table id="examplepl" className="display">
              <thead>
                <tr>
                  {tlcolumns.map((cell) => (
                    <td key={cell.name}>{cell.name}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {trainingLinkedDetails &&
                  trainingLinkedDetails.map((element) => (
                    <tr key={element.training_staff_id}>
                      <td>{element.training_staff_id}</td>
                      <td>{element.title}</td>
                      <td>{element.training_from_date}</td>
                      <td>{element.training_to_date}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </ComponentCard>
        </Col>
      </Row>
      <Row>
        <ComponentCard title="Add a note">
          <AddNote recordId={id} roomName="EmployeeEdit" />
          <ViewNote recordId={id} roomName="EmployeeEdit" />
        </ComponentCard>
      </Row>
    </div>
  );
}

export default LinkedPortalsTab;
