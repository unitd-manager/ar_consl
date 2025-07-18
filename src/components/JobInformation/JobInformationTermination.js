import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

export default function JobTermination({ handleInputsJobInformation, job }) {
  JobTermination.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    job: PropTypes.object,
  };

  return (
    <FormGroup>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Notice Period for Termination</Label>
            <Input
              type="textarea"
              name="notice_period_for_termination"
              onChange={handleInputsJobInformation}
              value={job?.notice_period_for_termination || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Date of Resignation Notice</Label>
            <Input
              type="date"
              name="resignation_notice_date"
              onChange={handleInputsJobInformation}
              value={
                job?.resignation_notice_date
                  ? moment(job.resignation_notice_date).format('YYYY-MM-DD')
                  : ''
              }
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Termination/Cessation Date</Label>
            <Input
              type="date"
              name="termination_date"
              onChange={handleInputsJobInformation}
              value={
                job?.termination_date
                  ? moment(job.termination_date).format('YYYY-MM-DD')
                  : ''
              }
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Reason for Termination</Label>
            <Input
              type="textarea"
              name="termination_reason"
              onChange={handleInputsJobInformation}
              value={job?.termination_reason || ''}
            />
          </FormGroup>
        </Col>

        <Col md="4">
          <FormGroup>
            <Label>Departure Date</Label>
            <Input
              type="date"
              name="departure_date"
              onChange={handleInputsJobInformation}
              value={
                job?.departure_date
                  ? moment(job.departure_date).format('YYYY-MM-DD')
                  : ''
              }
            />
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
}
