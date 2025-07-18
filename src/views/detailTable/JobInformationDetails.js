import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import message from '../../components/Message';

const JobInformationDetails = () => {
  const [employee, setEmployee] = useState([]);
  const [jobForms, setJobForms] = useState({
    employee_id: '',
    first_name: '',
    fin_no: '',
    status: 'current',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch employee list (those who don't have job information)
  const fetchEmployees = () => {
    api
      .get('/jobinformation/getEmployee')
      .then((res) => {
        setEmployee(res.data.data);
      })
      .catch(() => {
        message('Failed to fetch employee list.', 'error');
      });
  };

  // Handle form field changes
  const handleInputs = (e) => {
    setJobForms({ ...jobForms, [e.target.name]: e.target.value });
  };

  // Submit form
  const insertJobInformation = () => {
    api
      .post('/jobinformation/insertjob_information', jobForms)
      .then((res) => {
        const insertedId = res.data.data.insertId;
        message('Job Information inserted successfully.', 'success');
        setTimeout(() => {
          navigate(`/JobInformationEdit/${insertedId}`);
        }, 300);
      })
      .catch(() => {
        message('Please fill all required fields.', 'warning');
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, [id]);

  return (
    <div>
      <BreadCrumbs />
      <Row>
        <ToastContainer />
        <Col md="6">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Label>
                  Employee Name <span className="required">*</span>
                </Label>
                <Input
                  type="select"
                  name="employee_id"
                  value={jobForms.employee_id}
                  onChange={handleInputs}
                >
                  <option value="">Please Select</option>
                  {employee &&
                    employee
                      .filter((ele) => ele.e_count === 0)
                      .map((ele) => (
                        <option key={ele.employee_id} value={ele.employee_id}>
                          {ele.first_name}
                        </option>
                      ))}
                </Input>
              </FormGroup>

              <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                <Button
                  color="primary"
                  type="button"
                  className="btn mr-2 shadow-none"
                  onClick={insertJobInformation}
                >
                  Save & Continue
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate('/JobInformation')}
                  className="btn btn-dark shadow-none"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};

export default JobInformationDetails;
