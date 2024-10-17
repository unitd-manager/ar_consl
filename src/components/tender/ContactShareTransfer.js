import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  ModalBody,
  ModalFooter,
  Modal,
  ModalHeader,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import message from '../Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../views/form-editor/editor.scss';
import api from '../../constants/api';

const ContactEditModal = ({
  contactDatas,
  editContactEditModals,
  setEditContactEditModals,
  contactsDetails,
}) => {
  ContactEditModal.propTypes = {
    contactDatas: PropTypes.object,
    editContactEditModals: PropTypes.bool,
    setEditContactEditModals: PropTypes.func,
    contactsDetails: PropTypes.any,
  };

  const [contactinsert, setContactInsert] = useState();
  const [director, setDirector] = useState();
  const { id } = useParams();
  const handleInputs = (e) => {
    setContactInsert({ ...contactinsert, [e.target.name]: e.target.value });
  };

  //Logic for edit data in db

  const editContactsData = () => {
    if (
      contactinsert.first_name !== '' &&
      contactinsert.no_of_shares !== '' &&
      contactinsert.to_contact_id !== '' &&
      contactinsert.transfer_date !== '' &&
      contactinsert.consideration !== '' &&
      contactinsert.director_authorizing_id !== '' &&
      contactinsert.description_of_shares!== ''
    ) {
      api
        .post('/clients/editShareTransfer', contactinsert)
        .then(() => {
          message('Record editted successfully', 'success');
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };
  const getDirector = () => {
    api.post('/clients/getContactPosition', { company_id: id }).then((res) => {
      setDirector(res.data.data);
    });
  };

  useEffect(() => {
    getDirector();
    setContactInsert(contactDatas);
  }, [contactDatas]);

  return (
    <>
      <Modal size="lg" isOpen={editContactEditModals}>
        <ModalHeader>
          Edit Share Transfer
          <Button
            color="secondary"
            onClick={() => {
              setEditContactEditModals(false);
            }}
          >
            X
          </Button>
        </ModalHeader>

        <ModalBody>
          <Row>
            <Col md="3" className="mb-4 d-flex justify-content-between"></Col>
          </Row>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label>
                  Transferor<span className="required"> *</span>
                </Label>
                <Input
                  type="select"
                  name="from_contact_id"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.from_contact_id}
                >
                  <option value="selected">Please Select</option>
                  {contactsDetails &&
                    contactsDetails.map((ele) => {
                      return (
                        <option key={ele.contact_id} value={ele.contact_id}>
                          {ele.first_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>
                  Transferee<span className="required"> *</span>
                </Label>
                <Input
                  type="select"
                  name="to_contact_id"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.to_contact_id}
                >
                  <option value="selected">Please Select</option>
                  {contactsDetails &&
                    contactsDetails.map((ele) => {
                      return (
                        <option key={ele.contact_id} value={ele.contact_id}>
                          {ele.first_name}
                        </option>
                      );
                    })}
                </Input>
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label>
                  Transfer date<span className="required"> *</span>
                </Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.transfer_date}
                  name="transfer_date"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <Label>
                  Description of shares<span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  name="description_of_shares"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.description_of_shares}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>
                  No of shares<span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  name="no_of_shares"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.no_of_shares}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>
                  Consideration<span className="required"> *</span>
                </Label>
                <Input
                  type="text"
                  name="consideration"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.consideration}
                />
              </FormGroup>
            </Col>

            <Col md="12">
              <Label>
                Director authorizing<span className="required"> *</span>
              </Label>
              <Input
                type="select"
                name="director_authorizing_id"
                onChange={handleInputs}
                value={contactinsert && contactinsert.director_authorizing_id}
              >
                <option value="selected">Please Select</option>
                {director &&
                  director.map((ele) => {
                    return (
                      <option key={ele.contact_id} value={ele.first_name}>
                        {ele.first_name}
                      </option>
                    );
                  })}
              </Input>
            </Col>
          </Row>
        </ModalBody>

        <ModalFooter>
          <Row>
            <div className="pt-3 mt-3 d-flex align-items-center gap-2">
              <Button
                color="primary"
                onClick={() => {
                  editContactsData();
                }}
              >
                Submit
              </Button>
              <Button
                color="secondary"
                onClick={() => {
                  setEditContactEditModals(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ContactEditModal;
