import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

function TabPassTypeTab({ tabPassTypeDetails, handlePassTypeInputs }) {
  TabPassTypeTab.propTypes = {
    tabPassTypeDetails: PropTypes.object.isRequired,
    handlePassTypeInputs: PropTypes.func.isRequired,
  };

  const citizen = tabPassTypeDetails?.citizen;

  return (
    <div>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label>
              <span style={{ color: 'red' }}>*</span> Pass Type
            </Label>
            <Input
              name="citizen"
              value={citizen || ''}
              type="select"
              onChange={handlePassTypeInputs}
            >
              <option value="">Please Select</option>
              <option value="Citizen">Citizen</option>
              <option value="PR">PR</option>
              <option value="EP">EP</option>
              <option value="SP">SP</option>
              <option value="WP">WP</option>
              <option value="DP">DP</option>
            </Input>
          </FormGroup>
        </Col>

        {citizen === 'Citizen' && (
          <Col md="4">
            <FormGroup>
              <Label>
                <span style={{ color: 'red' }}>*</span> NRIC No
              </Label>
              <Input
                name="nric_no"
                value={tabPassTypeDetails?.nric_no || ''}
                type="text"
                onChange={handlePassTypeInputs}
              />
            </FormGroup>
          </Col>
        )}
      </Row>

      {(citizen === 'SP' || citizen === 'EP' || citizen === 'DP') && (
        <Row>
          <Col md="4">
            <FormGroup>
              <Label>
                <span style={{ color: 'red' }}>*</span> FIN No
              </Label>
              <Input
                name="fin_no"
                value={tabPassTypeDetails?.fin_no || ''}
                type="text"
                onChange={handlePassTypeInputs}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label>FIN No Expiry Date</Label>
              <Input
                name="fin_no_expiry_date"
                value={
                  tabPassTypeDetails?.fin_no_expiry_date
                    ? moment(tabPassTypeDetails.fin_no_expiry_date).format('YYYY-MM-DD')
                    : ''
                }
                type="date"
                onChange={handlePassTypeInputs}
              />
            </FormGroup>
          </Col>
        </Row>
      )}

      {citizen === 'PR' && (
        <Row>
          <Col md="4">
            <FormGroup>
              <Label>
                <span style={{ color: 'red' }}>*</span> NRIC No
              </Label>
              <Input
                name="nric_no"
                value={tabPassTypeDetails?.nric_no || ''}
                type="text"
                onChange={handlePassTypeInputs}
              />
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <Label>SPR Year</Label>
              <Input
                name="spr_year"
                value={tabPassTypeDetails?.spr_year || ''}
                onChange={handlePassTypeInputs}
                type="select"
              >
                <option value="">Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      )}

      {citizen === 'WP' && (
        <>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>FIN No</Label>
                <Input
                  name="fin_no"
                  value={tabPassTypeDetails?.fin_no || ''}
                  type="text"
                  onChange={handlePassTypeInputs}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  <span style={{ color: 'red' }}>*</span> Work Permit No
                </Label>
                <Input
                  name="work_permit"
                  value={tabPassTypeDetails?.work_permit || ''}
                  type="text"
                  onChange={handlePassTypeInputs}
                />
              </FormGroup>
            </Col>
          </Row>
        </>
      )}

      <Row>
        <Col md="4">
          <FormGroup>
            <Label>Work Permit Expiry Date</Label>
            <Input
              name="work_permit_expiry_date"
              value={
                tabPassTypeDetails?.work_permit_expiry_date
                  ? moment(tabPassTypeDetails.work_permit_expiry_date).format('YYYY-MM-DD')
                  : ''
              }
              type="date"
              onChange={handlePassTypeInputs}
              min={moment().format('YYYY-MM-DD')}
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
}

export default TabPassTypeTab;
