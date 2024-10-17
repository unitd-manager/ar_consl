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
import message from '../Message';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../views/form-editor/editor.scss';
import api from '../../constants/api';

const ContactEditModal = ({
  contactDatass,
  editContactEditModalss,
  setEditContactEditModalss,
  director,
}) => {
  ContactEditModal.propTypes = {
    contactDatass: PropTypes.object,
    editContactEditModalss: PropTypes.bool,
    setEditContactEditModalss: PropTypes.func,
    director: PropTypes.any,
  };

  const [contactinsert, setContactInsert] = useState();

  const handleInputs = (e) => {
    setContactInsert({ ...contactinsert, [e.target.name]: e.target.value });
  };

  //Logic for edit data in db

  const editContactsData = () => {
    if(contactinsert.no_of_shares_increased!=="" 
    && contactinsert.consideration_amount!=="" && 
    contactinsert.directors_ordinary_shares!=="" &&
    contactinsert.date!=="" &&
    contactinsert.first_name!=="" ){
    api
      .post('/clients/editShareIncrease', contactinsert)
      .then(() => {
        message('Record editted successfully', 'success');
        //window.location.reload();
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
    }else {
      message('Please fill all required fields', 'warning');
    }
  };

  useEffect(() => {
    // editContactById();
    setContactInsert(contactDatass);
  }, [contactDatass]);

  return (
    <>
      <Modal size="lg" isOpen={editContactEditModalss}>
        <ModalHeader>
          Edit Share Increase
          <Button
            color="secondary"
            onClick={() => {
              setEditContactEditModalss(false);
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
            <Col md="12">
              <FormGroup>
                <Label>No of shares increased<span className="required"> *</span></Label>
                <Input
                  type="text"
                  name="no_of_shares_increased"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.no_of_shares_increased}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>Consideration amount<span className="required"> *</span></Label>
                <Input
                  type="text"
                  name="consideration_amount"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.consideration_amount}
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>Directors ordinary shares<span className="required"> *</span></Label>
                <Input
                  type="text"
                  name="directors_ordinary_shares"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.directors_ordinary_shares}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label>Date<span className="required"> *</span></Label>
                <Input
                  type="date"
                  onChange={handleInputs}
                  value={contactinsert && contactinsert.date}
                  name="date"
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <Label>
                Contact<span className="required"> *</span>
              </Label>
              <Input
                type="select"
                name="contact_id"
                onChange={handleInputs}
                value={contactinsert && contactinsert.contact_id}
              >
                <option value="selected">Please Select</option>
                {director &&
                  director.map((ele) => {
                    return (
                      <option key={ele.contact_id} value={ele.contact_id}>
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
                  setEditContactEditModalss(false);
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
