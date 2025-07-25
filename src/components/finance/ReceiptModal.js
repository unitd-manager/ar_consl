import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import api from '../../constants/api';
// import message from '../Message';

const ReceiptModal = ({ editReceiptModal, editReceiptDataModal, setReceiptDataModal }) => {
  ReceiptModal.propTypes = {
    editReceiptModal: PropTypes.any,
    editReceiptDataModal: PropTypes.bool,
    setReceiptDataModal: PropTypes.func,
  };
  //All state variable
  const [receiptData, setReceiptData] = useState(null);
  const { id } = useParams();

  //getting data from receipt id
  const getReceiptById = () => {
    api.post('/invoice/getReceiptData', { receipt_id: id }).then((res) => {
      setReceiptData(res.data.data);
    });
  };
  useEffect(() => {
    getReceiptById();
    setReceiptData(editReceiptModal);
  }, [editReceiptModal]);
  return (
    <>
      <Modal size="xl" isOpen={editReceiptDataModal}>
        <ModalHeader>
          Receipt Details
          <Button
            className="shadow-none"
            color="secondary"
            onClick={() => {
              setReceiptDataModal(false);
            }}
          >
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Form>
                    <Card>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <Label>Code</Label>
                            <Input
                              type="text"
                              defaultValue={receiptData && receiptData.receipt_code}
                              name="receipt_code"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Status</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.receipt_status}
                              name="receipt_status"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Date</Label>
                            <Input
                              type="text"
                              
                              value={receiptData && moment(receiptData.receipt_date).format('DD-MM-YYYY')}
                              // value={receiptData && receiptData.receipt_date}
                              name="receipt_date"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Amount</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.amount}
                              name="amount"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Mode Of Payment</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.mode_of_payment}
                              name="mode_of_payment"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Remarks</Label>
                            <Input
                              type="text"
                              defaultValue={receiptData && receiptData.remarks}
                              name="remarks"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Generate date</Label>
                            <Input
                              type="date"
                              value={receiptData && receiptData.creation_date}
                              name="invoice_date"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Generated By</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.created_by}
                              name="created_by"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Updated Date</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.modification_date}
                              name="modification_date"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <Label>Updated By</Label>
                            <Input
                              type="text"
                              value={receiptData && receiptData.modified_by}
                              name="modified_by"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <ModalFooter>
                          <Button
                            className="shadow-none"
                            color="secondary"
                            onClick={() => {
                              setReceiptDataModal(false);
                            }}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Row>
                    </Card>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ReceiptModal;
