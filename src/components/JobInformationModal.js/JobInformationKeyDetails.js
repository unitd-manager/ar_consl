import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';

export default function JobInformationKeyDetails({ handleInputs, jobModal }) {
  JobInformationKeyDetails.propTypes = {
    handleInputs: PropTypes.object,
    jobModal: PropTypes.object,
  };

  return (
    <>
      <ToastContainer />
      <FormGroup>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label>Employment Start/Commencement Date</Label>
              <Input
                type="date"
                onChange={handleInputs}
                value={
                  jobModal && jobModal.act_join_date
                    ? moment(jobModal.act_join_date).format('YYYY-MM-DD')
                    : ''
                }
                name="act_join_date"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Duties & Responsibility</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={jobModal && jobModal.duty_responsibility}
                name="duty_responsibility"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Duration of Employment (fixed-term)</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={jobModal && jobModal.duration_of_employment}
                name="duration_of_employment"
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label>Place of Work</Label>
              <Input
                type="text"
                onChange={handleInputs}
                value={jobModal && jobModal.place_of_work}
                name="place_of_work"
              />
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
}
