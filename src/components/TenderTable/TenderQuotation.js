import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import moment from 'moment';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import api from '../../constants/api';
import AddLineItemModal from '../tender/AddLineItemModal';
import EditQuoteModal from '../tender/EditQuoteModal';
import ViewQuoteLogModal from '../tender/ViewQuoteLogModal';
import EditLineItemModal from '../tender/EditLineItemModal';

const RedLabel = styled.label`
  color: #2962ff;
`;

export default function TenderQuotation({
  tenderId,
  quote,
  lineItem,
  PdfQuote,
  quotationsModal,
  setquotationsModal,
  getLineItem,
  setAddLineItemModal,
  setEditQuoteModal,
  viewLineModal,
  viewLineToggle,
  editQuoteModal,
  addLineItemModal,
  project,
  id,
  setViewLineModal,
  generateCodes,
  handleQuoteForms,
  generateCode,
}) {
  TenderQuotation.propTypes = {
    tenderId: PropTypes.object,
    lineItem: PropTypes.object,
    viewLineModal: PropTypes.object,
    PdfQuote: PropTypes.string,
    getLineItem: PropTypes.object,
    viewLineToggle: PropTypes.object,
    setEditQuoteModal: PropTypes.object,
    setAddLineItemModal: PropTypes.object,
    editQuoteModal: PropTypes.object,
    addLineItemModal: PropTypes.object,
    quotationsModal: PropTypes.object,
    setquotationsModal: PropTypes.object,
    quote: PropTypes.object,
    project: PropTypes.array,
    id: PropTypes.any,
    setViewLineModal: PropTypes.any,
    handleQuoteForms: PropTypes.object,
    generateCode: PropTypes.object,
    generateCodes: PropTypes.object,
  };

  const [quoteDatas, setQuoteData] = useState();
  const [quoteLine, setQuoteLine] = useState();
  const [editLineModelItem, setEditLineModelItem] = useState(null);
  const [editLineModal, setEditLineModal] = useState(false);
  console.log('1', quoteDatas);

  const QuoteProject = project.find((element) => {
    return element.quote_id === quote.quote_id;
  });
  const deleteRecord = (deleteID) => {
    Swal.fire({
      title: `Are you sure? ${id}`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        api.post('/tender/deleteEditItem', { quote_items_id: deleteID }).then(() => {
          Swal.fire('Deleted!', 'Your Line Items has been deleted.', 'success');
          window.location.reload();
        });
      }
    });
  };

  useEffect(() => {}, [tenderId]);
  return (
    <div>
      <Row>
        {Object.keys(quote).length === 0 && (
          <Col md="2" className="mb-4 d-flex justify-content-between">
            <Button
              color="primary"
              className="shadow-none"
              onClick={(ele) => {
                if (
                  window.confirm(
                    'Do you Like to Add Quote ?',
                  )
                ) {
                handleQuoteForms(ele);
                generateCode(ele);
                }
              }}
            >
              Add Quote
            </Button>
          </Col>
        )}
        {Object.keys(quote).length !== 0 && (
          <Col md="2" className="mb-4 d-flex justify-content-between">
            <Button
              color="primary"
              className="shadow-none"
              onClick={() => {
                setquotationsModal(true);
              }}
            >
              View Quote Log
            </Button>
          </Col>
        )}
        {QuoteProject === undefined && quote.quote_status === 'Awarded' && (
          <Col md="2" className="mb-4 d-flex justify-content-between">
            <Button
              color="primary"
              className="shadow-none"
              onClick={() => {
                if (
                  window.confirm(
                    'Do you like to Convert to Project?',
                  )
                ) {
                //insertProject();
                generateCodes();
              }}
            }
            >
              Convert Opp To Project
            </Button>
          </Col>
        )}

        {quote && QuoteProject !== undefined && (
          <Col md="2" className="mb-4 d-flex justify-content-between">
            <Link to={`/ProjectEdit/${QuoteProject && QuoteProject.project_id}?tab=3`}>
              {' '}
              <Button color="primary" className="shadow-none">
                Go to Project
              </Button>
            </Link>
          </Col>
        )}
      </Row>

      {/* End View Line Item Modal */}
      <EditLineItemModal
        editLineModal={editLineModal}
        setEditLineModal={setEditLineModal}
        FetchLineItemData={editLineModelItem}
        getLineItem={getLineItem}
        setViewLineModal={setViewLineModal}
      >
        {' '}
      </EditLineItemModal>

      {/* Call View Quote Log Modal */}
      {quotationsModal && (
        <ViewQuoteLogModal
          quotationsModal={quotationsModal}
          setquotationsModal={setquotationsModal}
          id={tenderId}
        />
      )}
      {Object.keys(quote).length !== 0 && (
        <Form>
          <Row>
            <Col md="2">
              <FormGroup>
                <RedLabel>Quote Code</RedLabel>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <RedLabel>Quote Date</RedLabel>
              </FormGroup>
            </Col>
            <Col md="1">
              <FormGroup>
                <RedLabel>Amount</RedLabel>{' '}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup></FormGroup>
            </Col>
            <Col>
              <FormGroup></FormGroup>
            </Col>
            <Col md="2">
              <FormGroup>
                <RedLabel>Action</RedLabel>{' '}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <FormGroup>
                <Label>
                  <u>{quote && quote.quote_code}</u>
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>
                  {quote.quote_date ? moment(quote.quote_date).format('DD MMM YY') : ''}
                </Label>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label>{quote && quote.total_amount}</Label>
              </FormGroup>
            </Col>
          
            <Col md="2">
              <RedLabel>
                <u
                  onClick={() => {
                    getLineItem(quote.quote_id);
                    setViewLineModal(true);
                  }}
                >
                  View Line Items
                </u>
              </RedLabel>

              <Modal size="xl" isOpen={viewLineModal} toggle={viewLineToggle.bind(null)}>
                <ModalHeader toggle={viewLineToggle.bind(null)}>Line Items</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <table className="lineitem border border-secondary rounded">
                      <thead>
                        <tr>
                          <th scope="col">Title </th>
                          <th scope="col">Description </th>
                          <th scope="col">Amount</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lineItem &&
                          lineItem.map((e) => {
                            return (
                              <tr>
                                <td data-label="Title">{e.title}</td>
                                <td data-label="Description">{e.description}</td>
                                <td data-label="Amount">{e.amount}</td>
                                {quote && QuoteProject === undefined && (
                                  <td data-label="Actions">
                                    <span className="addline"
                                      onClick={() => {
                                        setEditLineModelItem(e);
                                        setEditLineModal(true);
                                      }}
                                    >
                                      <Icon.Edit2 />
                                    </span>
                                    <span className="addline"
                                      onClick={() => {
                                        deleteRecord(e.quote_items_id);
                                      }}
                                    >
                                      <Icon.Trash2 />
                                    </span>
                                  </td>
                                )}
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </FormGroup>
                </ModalBody>
              </Modal>
            </Col>
            
            <Col>
              <FormGroup>
                <Row>
                  {QuoteProject === undefined && (
                    <Col md="4">
                      <Label>
                        <span className='addline'
                          onClick={() => {
                            setQuoteData(quote);
                            setQuoteData(lineItem.quote_id);
                            getLineItem(quote.quote_id);
                            setEditQuoteModal(true);
                          }}
                        >
                          <Icon.Edit />
                        </span>
                      </Label>
                    </Col>
                  )}
                  <Col md="4">
                    <Label>
                      <PdfQuote id={id} quoteId={quote.quote_id}></PdfQuote>
                    </Label>
                  </Col>

                  {project && QuoteProject === undefined && (
                    <Col md="4">
                      <Label>
                        <span className='addline'
                          onClick={() => {
                            setQuoteLine(quote.quote_id);
                            setAddLineItemModal(true);
                          }}
                        >
                          <Icon.PlusCircle />
                        </span>
                      </Label>
                    </Col>
                  )}
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      )}
      {editQuoteModal && (
        <EditQuoteModal
          lineItem={lineItem}
          editQuoteModal={editQuoteModal}
          setEditQuoteModal={setEditQuoteModal}
          quoteDatas={quote}
        ></EditQuoteModal>
      )}
      {addLineItemModal && (
        <AddLineItemModal
        
          projectInfo={tenderId}
          addLineItemModal={addLineItemModal}
          setAddLineItemModal={setAddLineItemModal}
          quoteLine={quoteLine}
        ></AddLineItemModal>
      )}
    </div>
  );
}
