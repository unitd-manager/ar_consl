import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import ComponentCard from '../ComponentCard';

 const ValueListEditDetails = ({
  valuelisteditdetails,
  handleInputs,
}) => {
  ValueListEditDetails.propTypes = {
    valuelisteditdetails: PropTypes.object,
    handleInputs: PropTypes.func,
  };

  return (
    <Form>
      <FormGroup>
        <ComponentCard title="Invoice Details"
                    creationModificationDate={valuelisteditdetails}

        >
          <Row>
            {/* <Col md="4">
              <FormGroup>
                <Label>
                  Value List Name<span className="required"> *</span>
                </Label>
                <Input
                  type="select"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.status}
                  name="key_text"
                >
                  <option value="" defaultValue='selected' >
                    Please Select
                  </option>
                  {valuelistname &&
                    valuelistname.map((ele) => {
                      if (ele.id === id) {
                        return (
                          <option key={ele.id} defaultValue='selected' value={ele.name} >
                            {ele.name}
                          </option>
                        );
                      }
                      return <option key={ele.id} value={ele.name}>{ele.name}</option>;
                    })}
                </Input>
              </FormGroup>
            </Col> */}

<Col md="4">
              <FormGroup>
                <Label>
                  Project <span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.project_title}
                  name="project_title"
                />
              </FormGroup>
            </Col>
                <Col md="4">
              <FormGroup>
                <Label>
                  Company Name <span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.company_name}
                  name="company_name"
                />
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label>
                  Contact Name <span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.contact_name}
                  name="contact_name"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  Status <span className="required"> *</span>
                </Label>
                <Input
                  type="textarea"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.status}
                  name="status"
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Type</Label>
                <Input
                  type="text"
                  onChange={handleInputs}
                  value={valuelisteditdetails && valuelisteditdetails.invoice_type}
                  name="invoice_type"
                />
              </FormGroup>
            </Col>
          </Row>
        </ComponentCard>
      </FormGroup>
    </Form>
  );
}
export default ValueListEditDetails