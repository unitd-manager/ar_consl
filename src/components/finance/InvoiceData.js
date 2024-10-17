import React, { useState,useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useParams } from 'react-router-dom';
import * as $ from 'jquery';
import random from 'random';
import api from '../../constants/api';
import message from '../Message';
import ComponentCard from '../ComponentCard';
import InvoiceTable from './InvoiceTable';

const FinanceInvoiceData = ({ editInvoiceData, setEditInvoiceData, projectInfo, orderId }) => {
  FinanceInvoiceData.propTypes = {
    editInvoiceData: PropTypes.bool,
    setEditInvoiceData: PropTypes.func,
    projectInfo: PropTypes.any,
    orderId: PropTypes.any,
  };
  //All state Varible
  const { id } = useParams();
  const [totalAmount, setTotalAmount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [gstValue, setGstValue] = useState();
  const [paymentTerms, setPaymentTerms] = useState('');
  const gstPercentageValue = parseInt(gstValue?.value, 10) || 0; 
  const [createInvoice, setCreateInvoice] = useState({
    discount: '',
    quote_code: '',
    po_number: '',
    project_location: '',
    project_reference: '',
    invoice_date: '',
    code: '',
    so_ref_no: '',
    site_code: '',
    attention: '',
    reference: '',
    invoice_terms: '',
    status: 'due',
    paymentTerms: '',
    invoice_code: '',
    order_id: id,
    invoice_due_date: '',
  });

  const [addLineItem, setAddLineItem] = useState([
    {
      id: random.int(1, 99),
      total_cost: '',
      item_title: '',
      description: '',
    },
  ]);
 
  const getGstValue = () => {
    api.get('/finance/getGst').then((res) => {
      setGstValue(res.data.data);
      });
  };
  useEffect(() => {
    getGstValue();
  }, []);
  //setting data in createinvoice
  const handleInserts = (e) => {
    setCreateInvoice({ ...createInvoice, [e.target.name]: e.target.value });
  };
  const handleDataEditor = (e, type) => {
    setCreateInvoice({
      ...createInvoice,
      [type]: draftToHtml(convertToRaw(e.getCurrentContent())),
    });
  };

  //Insert Invoice Item
  const addLineItemApi = (obj) => {
    obj.order_id = projectInfo;
    api
      .post('/Finance/insertInvoiceItem', obj)
      .then(() => {
         window.location.reload();
        message('Line Item Added Successfully', 'sucess');
      })
      .catch(() => {
        message('Cannot Add Line Items', 'error');
      });
  };
  //final api call
  const finalinsertapi = (receipt, results) => {
    console.log('invoiceid',receipt)
    results.forEach((el)=>{
   if(el.total_cost){
     addLineItemApi({
    description:el.description,
    invoice_id: receipt,
    total_cost:el.total_cost,
    item_title:el.item_title,
    item_code: projectInfo.item_code,
  
  });
}
    })
    // for (let j = 0; j < results.length; j++) {
    //   if(results[j].item_title !==''){
    //   addLineItemApi({
    //     description: results[j].description,
    //     invoice_id: receipt,
    //     total_cost: results[j].total_cost,
    //     item_title: results[j].item_title,
    //     item_code: projectInfo.item_code,
      
    //   });
    // }
    // }
  };
  //Insert Invoice
  const insertInvoice = async (results, code,totalamount) => {
    createInvoice.invoice_amount = totalamount + (gstPercentageValue / 100) * totalamount;
    createInvoice.gst_value = (gstPercentageValue / 100) * totalamount;
    createInvoice.gst_percentage = gstPercentageValue;
    createInvoice.project_id = projectInfo;
    createInvoice.order_id = orderId;
    createInvoice.invoice_code = code;
    console.log('invamount',createInvoice.invoice_amount)
    const now = new Date();
    if (now.getMonth() === 11) {
      const current = new Date(now.getFullYear() + 1, 0, now.getDate());
      createInvoice.invoice_due_date = current;
    } else {
      const current = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
      createInvoice.invoice_due_date = current;
    }
    console.log('results',results)
    api
      .post('/Finance/insertInvoice', createInvoice)
      .then((res) => {
        message('Invoice inserted successfully.', 'success');
        finalinsertapi(res.data.data.insertId, results);
        setTimeout(() => {
          // window.location.reload();
        }, 300);
      })
      .catch(() => {
        message('Network connection error.');
      });
  };
  //generateCode
  const generateCode = (results, type,amount) => {
    api
      .post('/commonApi/getCodeValue', { type:'invoice' })
      .then((res) => {
        console.log('results',results)
        insertInvoice(results, res.data.data,amount);
      })
      .catch(() => {
        insertInvoice(results, '');
      });
  };

  //Add new line item
  const AddNewLineItem = () => {
    setAddLineItem([
      ...addLineItem,
      {
        id: new Date().getTime().toString(),
        total_cost: '',
        item_title: '',
        description: '',
      },
    ]);
  };

  //Invoice item values
  const getAllValues = () => {
    let totalValue=0;
    const result = [];
    $('.lineitem tbody tr').each(function input() {
      const allValues = {};
      $(this)
        .find('input')
        .each(function output() {
          const fieldName = $(this).attr('name');
          allValues[fieldName] = $(this).val();
        });
      result.push(allValues);
    });
    
    console.log(result);
    
    result.forEach((e) => {
      if (e.total_cost) {
        totalValue += parseFloat(e.total_cost);
      }
    }); 
    setTotalAmount(totalValue)
    console.log('totamount',totalValue);
    generateCode(result, 'invoice',totalValue).finally(() => {
      setSubmitting(false); // Reset the submitting state after the API call completes (success or error).
    });
  };
  

  // Clear row value
  const ClearValue = (ind) => {
    setAddLineItem((current) =>
      current.filter((obj) => {
        return obj.id !== ind.id;
      }),
    );
    if (ind.total_cost) {
      const finalTotal = totalAmount - parseFloat(ind.total_cost);
      setTotalAmount(finalTotal);
    }
  };

  return (
    <>
      <Modal size="xl" isOpen={editInvoiceData}>
        <ModalHeader>
          Create Invoice
          <Button
            className="shadow-none"
            color="secondary"
            onClick={() => {
              setEditInvoiceData(false);
            }}
          >
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <Form>
                <Row>
                  <Col md="3">
                    <Button
                      className="shadow-none"
                      color="primary"
                      type="button"
                      onClick={() => {
                        AddNewLineItem();
                      }}
                    >
                      Add Line Item
                    </Button>
                  </Col>
                  {/* Invoice Detail */}
                  <Row>
                    <InvoiceTable createInvoice={createInvoice} handleInserts={handleInserts} />
                    {/* Description form */}
                    <ComponentCard title="Description">
                      <Editor
                        editorState={paymentTerms}
                        wrapperClassName="demo-wrapper mb-0"
                        editorClassName="demo-editor border mb-4 edi-height"
                        onEditorStateChange={(e) => {
                          handleDataEditor(e, 'payment_terms');
                          setPaymentTerms(e);
                        }}
                      />
                    </ComponentCard>
                  </Row>
                  {/* Invoice Item */}
                  <Row>
                    <Col>
                      <table className="lineitem">
                        <thead>
                          <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Description </th>
                            <th scope="col">Total Price</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {addLineItem && addLineItem.map((item) => {
                            return (
                              <tr key={item.id}>
                               <td data-label="Item">
                               <Input Value={item.item_title} type="text" name="item_title" />
                               </td>
                               <td data-label="Description">
                               <Input Value={item.description} type="text" name="description" />
                                </td>
                                <td data-label="Total Price">
                                 <Input Value={item.total_cost} type="number" name="total_cost" />
                                 </td>

                                <td data-label="Action">
                                  <div className="anchor">
                                    <Input type="hidden" name="id" Value={item.id}></Input>
                                    <span
                                      onClick={() => {
                                        ClearValue(item);
                                      }}
                                    >
                                      Clear
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Col>
                  </Row>

                  <ModalFooter>
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={() => {
                        if (!submitting) {
                          setSubmitting(true);
                          getAllValues();
                        }
                      }}
                      disabled={submitting}
                    >
                      {' '}
                      Submit{' '}
                    </Button>
                    <Button
                      className="shadow-none"
                      color="secondary"
                      onClick={() => {
                        setEditInvoiceData(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Row>
              </Form>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FinanceInvoiceData;