import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import ComponentCard from '../ComponentCard';
import ComponentCardV2 from '../ComponentCardV2';
import PdfEmployeeContract from '../PDF/PdfEmployeeContract';
import PdfKET from '../PDF/PdfKET';

export default function Jobinformationedit({
  handleInputsJobInformation,
  job,
  insertJobInformation,
  id,
}) {
  Jobinformationedit.propTypes = {
    handleInputsJobInformation: PropTypes.func,
    insertJobInformation: PropTypes.func,
    id: PropTypes.any,
    job: PropTypes.object,
  };

  return (
    <>
      <ComponentCardV2>
        <Row>
          <Col>
            <PdfEmployeeContract job={job} />
          </Col>
          <Col>
            <PdfKET />
          </Col>
          <Col>
            <Button className="shadow-none" onClick={() => insertJobInformation(id)} color="dark">
              Duplicate
            </Button>
          </Col>
        </Row>
      </ComponentCardV2>

      <ComponentCard title="Details of Employment (KET)" creationModificationDate={job}>
        <ToastContainer />
        <br />
        <FormGroup>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Employment Start/Commencement Date<span className="required"> *</span></Label>
                <Input
                  type="date"
                  onChange={handleInputsJobInformation}
                  value={job && job.act_join_date ? moment(job.act_join_date).format('YYYY-MM-DD') : ''}
                  name="act_join_date"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Duties & Responsibility</Label>
                <Input
                  type="text"
                  onChange={handleInputsJobInformation}
                  value={job?.duty_responsibility || ''}
                  name="duty_responsibility"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label>Duration of Employment (for fixed term contracts)</Label>
                <Input
                  type="text"
                  onChange={handleInputsJobInformation}
                  value={job?.duration_of_employment || ''}
                  name="duration_of_employment"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label>Place of Work</Label>
                <Input
                  type="text"
                  onChange={handleInputsJobInformation}
                  value={job?.place_of_work || ''}
                  name="place_of_work"
                />
              </FormGroup>
            </Col>
          </Row>
        </FormGroup>
      </ComponentCard>
    </>
  );
}
