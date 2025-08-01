import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';

export default function JobLeave({ handleInputsJobInformation, job }) {
  JobLeave.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    job: PropTypes.object,
  };

  return (
    <FormGroup>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Paid Annual Leave per year</Label>
            <Input
              type="text"
              onChange={handleInputsJobInformation}
              value={job?.paid_annual_leave_per_year || ''}
              name="paid_annual_leave_per_year"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Paid Outpatient Sick Leave per year</Label>
            <Input
              type="text"
              onChange={handleInputsJobInformation}
              value={job?.paid_outpatient_sick_leave_per_year || ''}
              name="paid_outpatient_sick_leave_per_year"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Paid Hospitalisation Leave per year</Label>
            <Input
              type="text"
              onChange={handleInputsJobInformation}
              value={job?.paid_hospitalisation_leave_per_year || ''}
              name="paid_hospitalisation_leave_per_year"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Paid Medical Examination Fee</Label>
            <br />
            <Label>Yes</Label>
            <Input
              name="paid_medical_examination_fee"
              value="1"
              type="radio"
              defaultChecked={job?.paid_medical_examination_fee === 1}
              onChange={handleInputsJobInformation}
            />
            &nbsp;&nbsp;
            <Label>No</Label>
            <Input
              name="paid_medical_examination_fee"
              value="0"
              type="radio"
              defaultChecked={job?.paid_medical_examination_fee === 0}
              onChange={handleInputsJobInformation}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Other Types of Leave</Label>
            <Input
              type="textarea"
              onChange={handleInputsJobInformation}
              value={job?.other_type_of_leave || ''}
              name="other_type_of_leave"
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Other Medical Benefits</Label>
            <Input
              type="textarea"
              onChange={handleInputsJobInformation}
              value={job?.other_medical_benefits || ''}
              name="other_medical_benefits"
            />
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
}
