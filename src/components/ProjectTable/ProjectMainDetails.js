import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import ComponentCard from '../ComponentCard';
import ComponentCardV2 from '../ComponentCardV2';
import PdfProjectIncorporationDetails from '../PDF/PdfProjectIncorporationDetails';
import PdfProjectPaidUpCapital from '../PDF/PdfProjectPaidUpCapital';

export default function ProjectMainDetails({ handleInputs, projectDetail, contact, company,incharge }) {
  ProjectMainDetails.propTypes = {
    handleInputs: PropTypes.func,
    projectDetail: PropTypes.any,
    contact: PropTypes.any,
    company: PropTypes.any,
    incharge: PropTypes.any,
  };
  return (
    <>
      <Form>
        <FormGroup>
          <ComponentCard title="Project Details">
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Code</Label>
                  <Input
                    type="text"
                    name="project_code"
                    defaultValue={projectDetail && projectDetail.project_code}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Title<span className="required">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="title"
                    value={projectDetail && projectDetail.title}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Category<span className="required">*</span>
                  </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={projectDetail && projectDetail.category}
                    name="category"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Incorporation">Incorporation</option>
                    <option value="Others">Others</option>
                    <option value="Secretarial Services">Secretarial Services</option>
                    <option value="Tax services">Tax services</option>
                    <option value="Year End Accounts">Year End Accounts</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Quote Ref#</Label>
                  <Input
                    type="text"
                    name="quote_ref"
                    defaultValue={projectDetail && projectDetail.quote_ref}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>
                    Company<span className="required">*</span>
                  </Label>
                  <Input
                    type="select"
                    value={projectDetail && projectDetail.company_id}
                    onChange={handleInputs}
                    name="company_id"
                  >
                    <option value="" selected="selected">
                      Please Select
                    </option>
                    {company &&
                      company.map((e) => {
                        return (
                          <option value={e.company_id} key={e.company_id}>
                            {e.company_name}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Old Company Name</Label>
                  <Input
                    type="text"
                    disabled
                    name="old_company_id"
                    defaultValue={projectDetail && projectDetail.old_company_name}
                    onChange={handleInputs}
                  >
                   
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Date of incorporation</Label>
                  <Input
                    type="text"
                    disabled
                    name="date_of_incorporation"
                    defaultValue={moment(projectDetail && projectDetail.date_of_incorporation).format('DD-MM-YYYY')}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Contact</Label>
                  <Input
                    type="select"
                    name="contact_id"
                    onChange={handleInputs}
                    value={projectDetail && projectDetail.contact_id}
                  >
                    <option value="selected">Please Select</option>
                    {contact &&
                      contact.map((ele) => {
                        return (
                          <option key={ele.contact_id} value={ele.contact_id}>
                            {ele.first_name}
                          </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="start_date"
                    defaultValue={projectDetail && projectDetail.start_date}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Estimated Finish Date</Label>
                  <Input
                    type="date"
                    name="estimated_finish_date"
                    defaultValue={projectDetail && projectDetail.estimated_finish_date}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Actual Finish Date</Label>
                  <Input
                    type="date"
                    name="actual_finish_date"
                    defaultValue={projectDetail && projectDetail.actual_finish_date}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Project Manager</Label>
                  <Input
                    type="select"
                    name="project_manager_id"
                    onChange={handleInputs}
                    value={projectDetail && projectDetail.project_manager_id}
                  >
                    <option value="selected">Please Select</option>
                    {incharge &&
                      incharge.map((ele) => {
                        return (
                          <option value={ele.employee_id} key={ele.first_name}>
                          {ele.first_name}
                        </option>
                        );
                      })}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label>Work Status</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    value={projectDetail && projectDetail.status}
                    name="status"
                  >
                    <option defaultValue="selected" value="WIP">
                      WIP
                    </option>
                    <option value=" C/O PARA THAI ADDICTION "> C/O PARA THAI ADDICTION </option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Complete">Complete</option>
                    <option value="Others">Others</option>
                    <option value="To Be Started">To Be Started</option>
                    <option value="Latest">Latest</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Finance Status</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    value={projectDetail && projectDetail.finance_status}
                    name="finance_status"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="Billed">Billed</option>
                    <option value="Others">Others</option>
                    <option value="Paid">Paid</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Client Type</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    value={projectDetail && projectDetail.client_type}
                    name="client_type"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="New Client">New Client</option>
                    <option value="Others">Others</option>
                    <option value="Repeat Client">Repeat Client</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Difficulty</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    value={projectDetail && projectDetail.difficulty}
                    name="difficulty"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="Others">Others</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    defaultValue={projectDetail && projectDetail.description}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Percentage Completed</Label>
                  <Input
                    type="select"
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                    value={projectDetail && projectDetail.per_completed}
                    name="per_completed"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="0">0</option>
                    <option value="20">20</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="55">55</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="95">95</option>
                    <option value="40">40</option>
                    <option value="100">100</option>
                    <option value="Others">Others</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Project value</Label>
                  <Input
                    type="text"
                    name="project_value"
                    defaultValue={projectDetail && projectDetail.project_value}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Still to Bill$</Label>
                  <Input
                    className={
                      projectDetail && projectDetail.balanceAmount < 0 ? 'text-danger' : ''
                    }
                    type="text"
                    disabled
                    name="balanceAmount"
                    defaultValue={projectDetail && projectDetail.balanceAmount}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      {projectDetail && projectDetail.category === 'Incorporation' && (
        <Form>
          <FormGroup>
            <ComponentCardV2>
              <Row>
                <Col>
                  <PdfProjectIncorporationDetails></PdfProjectIncorporationDetails>
                </Col>

                <Col>
                  <PdfProjectPaidUpCapital></PdfProjectPaidUpCapital>
                </Col>
              </Row>
            </ComponentCardV2>
          </FormGroup>
        </Form>
      )}
    </>
  );
}
