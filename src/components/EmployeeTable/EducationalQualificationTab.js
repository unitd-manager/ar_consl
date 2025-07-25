import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';
import PropTypes from 'prop-types';

function EducationalQualificationTab({
  educationalQualificationDetails,
  qualifications,
  handleEduInputs,
}) {
  EducationalQualificationTab.propTypes = {
    educationalQualificationDetails: PropTypes.object,
    handleEduInputs: PropTypes.func,
    qualifications: PropTypes.array,
  };

  return (
    <div>
      {/* Qualification 1 */}
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Qualification 1</Label>
            <Input
              name="educational_qualitifcation1"
              value={educationalQualificationDetails?.educational_qualitifcation1 || ''}
              onChange={handleEduInputs}
              type="select"
            >
              <option value="">Please Select</option>
              {qualifications?.map((ele) => (
                <option key={ele.valuelist_id} value={ele.valuelist_id}>
                  {ele.value}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Degree</Label>
            <Input
              name="degree1"
              value={educationalQualificationDetails?.degree1 || ''}
              onChange={handleEduInputs}
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Year of Completion</Label>
            <Input
              name="year_of_completion1"
              value={
                educationalQualificationDetails?.year_of_completion1
                  ? moment(educationalQualificationDetails.year_of_completion1).format('YYYY-MM-DD')
                  : ''
              }
              onChange={handleEduInputs}
              type="date"
              max={moment().format('YYYY-MM-DD')}
            />
          </FormGroup>
        </Col>
      </Row>

      {/* Qualification 2 */}
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Qualification 2</Label>
            <Input
              name="educational_qualitifcation2"
              value={educationalQualificationDetails?.educational_qualitifcation2 || ''}
              onChange={handleEduInputs}
              type="select"
            >
              <option value="">Please Select</option>
              {qualifications?.map((ele) => (
                <option key={ele.valuelist_id} value={ele.valuelist_id}>
                  {ele.value}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Degree</Label>
            <Input
              name="degree2"
              value={educationalQualificationDetails?.degree2 || ''}
              onChange={handleEduInputs}
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Year of Completion</Label>
            <Input
              name="year_of_completion2"
              value={
                educationalQualificationDetails?.year_of_completion2
                  ? moment(educationalQualificationDetails.year_of_completion2).format('YYYY-MM-DD')
                  : ''
              }
              onChange={handleEduInputs}
              type="date"
            />
          </FormGroup>
        </Col>
      </Row>

      {/* Qualification 3 */}
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Qualification 3</Label>
            <Input
              name="educational_qualitifcation3"
              value={educationalQualificationDetails?.educational_qualitifcation3 || ''}
              onChange={handleEduInputs}
              type="select"
            >
              <option value="">Please Select</option>
              {qualifications?.map((ele) => (
                <option key={ele.valuelist_id} value={ele.valuelist_id}>
                  {ele.value}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Degree</Label>
            <Input
              name="degree3"
              value={educationalQualificationDetails?.degree3 || ''}
              onChange={handleEduInputs}
              type="text"
            />
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Year of Completion</Label>
            <Input
              name="year_of_completion3"
              value={
                educationalQualificationDetails?.year_of_completion3
                  ? moment(educationalQualificationDetails.year_of_completion3).format('YYYY-MM-DD')
                  : ''
              }
              onChange={handleEduInputs}
              type="date"
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
}

export default EducationalQualificationTab;
