import React,{useState} from 'react';
import {
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import PdfAllPayslip from '../PDF/PdfAllPayslip'

function PrintPayslipModal({ printPayslipModal, setPrintPayslipModal,payrollManagementsdata }) {
  PrintPayslipModal.propTypes = {
    printPayslipModal: PropTypes.bool,
    setPrintPayslipModal: PropTypes.func,
    payrollManagementsdata:PropTypes.array
  };
const[filterPeriod, setFilterPeriod]=useState({
  month:'',
  year:''
})

const currentYear = new Date().getFullYear();
const years = [currentYear - 1, currentYear];

const handleFilterInputs=(e)=>{
setFilterPeriod({...filterPeriod,[e.target.name]:e.target.value})
}

  const payrolls=payrollManagementsdata.filter((e)=>{
    if(filterPeriod.month ==='' && filterPeriod.year ===''){
return payrollManagementsdata
    }
    if(filterPeriod.month ==='' && filterPeriod.year !==''){
      return e.payroll_year === Number(filterPeriod.year)
          }
          if(filterPeriod.month !=='' && filterPeriod.year ===''){
            return e.payroll_month ===filterPeriod.month
                }
                
                  return e.payroll_month ===filterPeriod.month && e.payroll_year === Number(filterPeriod.year)
                      

  })
console.log('payrolls',payrolls)
console.log('filterPeriod',filterPeriod)
console.log('filteryear',filterPeriod.year)
console.log('filtermonth',filterPeriod.month)
  return (
    <div>
      <Modal isOpen={printPayslipModal}>
        <ModalHeader>Gate All Payslip</ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <Col>
                <Row>
                  <Col md="3">
                    {' '}
                    <FormGroup>
                      <Label>Year</Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                    <Input
  name="year"
  type="select"
  value={filterPeriod.year}
  onChange={handleFilterInputs}
>
  <option value="">Please Select</option>
  {years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ))}
</Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <Label>Month</Label>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Input name="month" type="select" 
                      value={filterPeriod.month}
                      onChange={handleFilterInputs}>
                        <option value="">Please Select</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <CardBody className="shadow-none"></CardBody>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
         {filterPeriod.year && filterPeriod.month && <PdfAllPayslip payrollsYear={filterPeriod.year} payrollsMonth={filterPeriod.month}></PdfAllPayslip>}
          <Button
            color="dark"
            className="shadow-none"
            onClick={() => {
              setPrintPayslipModal(false);
            }}
          >
            {' '}
            Close{' '}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PrintPayslipModal;
