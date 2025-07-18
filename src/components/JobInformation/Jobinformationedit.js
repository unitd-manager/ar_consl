import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup } from 'reactstrap';
import JobInformation from '../SupplierModal/JobInformationEditModal';
import ApiButton from '../ApiButton';

export default function Jobinformationedit({
  editJobData,
  navigate,
  JobInformationEditModal,
  setJobInformationEditModal,
  deletejobData,
}) {
  Jobinformationedit.propTypes = {
    editJobData: PropTypes.any,
    navigate: PropTypes.func,
    JobInformationEditModal: PropTypes.bool,
    setJobInformationEditModal: PropTypes.func,
    deletejobData: PropTypes.func,
  };

  const backToList = () => {
    navigate('/JobInformation');
  };

  return (
    <Form>
      <FormGroup>
        <Row>
          <ApiButton
            editData={editJobData}
            navigate={navigate}
            applyChanges={editJobData}
            backToList={backToList}
            deleteData={deletejobData}
            module="Job Information"
          />
          <Col>
            <JobInformation
              JobInformationEditModal={JobInformationEditModal}
              setJobInformationEditModal={setJobInformationEditModal}
            />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}
