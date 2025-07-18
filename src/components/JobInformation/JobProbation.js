import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

export default function JobProbation({ handleInputsJobInformation, job }) {
  JobProbation.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    job: PropTypes.object,
  };

  // Function to handle status change and show alert for archive status
  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    handleInputsJobInformation(e);
    if (selectedStatus === 'archive') {
      Swal.fire({
        title: 'Enter Termination Record',
        text: 'Please enter termination records before saving.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <FormGroup>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Under Probation</Label>
            <br />
            <Label>Yes</Label>
            <Input
              name="probationary"
              value="1"
              type="radio"
              defaultChecked={job?.probationary === 1}
              onChange={handleInputsJobInformation}
            />
            &nbsp;&nbsp;
            <Label>No</Label>
            <Input
              name="probationary"
              value="0"
              type="radio"
              defaultChecked={job?.probationary === 0}
              onChange={handleInputsJobInformation}
            />
          </FormGroup>
        </Col>

        {job?.probationary === '1' && (
          <>
            <Col md="4">
              <FormGroup>
                <Label>Length of Probation</Label>
                <Input
                  type="text"
                  onChange={handleInputsJobInformation}
                  value={job?.length_of_probation || ''}
                  name="length_of_probation"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Probation Start Date</Label>
                <Input
                  type="date"
                  onChange={handleInputsJobInformation}
                  value={job?.probation_start_date ? moment(job.probation_start_date).format('YYYY-MM-DD') : ''}
                  name="probation_start_date"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Probation End Date</Label>
                <Input
                  type="date"
                  onChange={handleInputsJobInformation}
                  value={job?.probation_end_date ? moment(job.probation_end_date).format('YYYY-MM-DD') : ''}
                  name="probation_end_date"
                />
              </FormGroup>
            </Col>
          </>
        )}

        <Col md="4">
          <FormGroup>
            <Label>Employment Type</Label>
            <Input
              type="select"
              value={job?.emp_type || ''}
              name="emp_type"
              onChange={handleInputsJobInformation}
            >
              <option value="">Please Select</option>
              <option value="full time">Full Time</option>
              <option value="part time">Part Time</option>
              <option value="contract">Contract</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Designation</Label>
            <Input
              type="select"
              value={job?.designation || ''}
              name="designation"
              onChange={handleInputsJobInformation}
            >
              <option value="">Please Select</option>
              <option value="Accounts Executive">Accounts Executive</option>
              <option value="Finance Manager">Finance Manager</option>
              <option value="Director">Director</option>
              <option value="SCAFFOLDER">SCAFFOLDER</option>
              <option value="Driver">Driver</option>
              <option value="Manager">Manager</option>
              <option value="Admin Executive">Admin Executive</option>
              <option value="SUPERVISOR">SUPERVISOR</option>
              <option value="PROJECT CO ORDINATOR">PROJECT CO ORDINATOR</option>
              <option value="FORK LIFT OPERATOR">FORK LIFT OPERATOR</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Department</Label>
            <Input
              type="select"
              value={job?.department || ''}
              name="department"
              onChange={handleInputsJobInformation}
            >
              <option value="">Please Select</option>
              <option value="civil">Civil</option>
              <option value="mehanic">Mehanic</option>
              <option value="engineer">Engineer</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Joined/Arrival Date</Label>
            <Input
              type="date"
              onChange={handleInputsJobInformation}
              value={job?.join_date ? moment(job.join_date).format('YYYY-MM-DD') : ''}
              name="join_date"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Status</Label>
            <Input
              type="select"
              name="status"
              value={job?.status || ''}
              onChange={handleStatusChange}
            >
              <option value="">Please Select</option>
              <option value="current">Current</option>
              <option value="archive">Archive</option>
              <option value="cancel">Cancel</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
}
