import React, { useState, useEffect } from 'react';
import {
  Button, Input, Table, Row, Col
} from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import api from '../../constants/api';

const Receipt = () => {
  const [filters, setFilters] = useState({
    from_date:'',
    to_date:'',
    receipt_code: '',
    amount: '',
    supplier_id: '',
    mode_of_payment:'',
    receipt_status: '',
    receipt_date: '',
  });

  const [goodsReturns, setGoodsReturns] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [supplierList, setSupplierList]=useState([]);
// Fetch dropdowns
  const getDropdowns = () => {
    api.get('/receipt/getSuppliers').then((res) =>{ setSupplierList(res.data.data);
console.log('suppliers',res.data.data);}).catch(() => {
       
      });
  };

  useEffect(() => {
    getDropdowns();
  }, []);
const fetchData = async () => {
  try {
    const res = await api.get('/receipt/getFilteredReceipts', {
      params: {
        from_date: filters.from_date || '',
        to_date: filters.to_date || '',
        receipt_status: filters.receipt_status || '',
        supplier_id: filters.supplier_id || '',
        mode_of_payment: filters.mode_of_payment || '',
      }
    });

    setGoodsReturns(res.data.data);
    setTotalRecords(res.data.total);
  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => prev + 1);

//   const handleNewTransactionClick = () => {
//     console.log('Main "New Transaction" button clicked');
//     // e.g., navigate to /createGoodsReturn
//   };



  return (
    <div className="p-4 bg-light">
      <h4 className="mb-4">Receipt Management</h4>

      <Row className="mb-3">
       
        <Col md={2}><Input type="date" name="from_date" value={filters.from_date} onChange={handleFilterChange} /></Col>
        <Col md={2}><Input type="date" name="to_date" value={filters.to_date} onChange={handleFilterChange} /></Col>
        <Col md={2}>
          <Input type="select" name="status" value={filters.status} onChange={handleFilterChange}>
          <option></option>
            <option>paid</option>
            <option>unpaid</option>
            <option>closed</option>
            <option>Cancelled</option>
          </Input>
        </Col>
       <Col md={2}>
  <Input type="select" name="supplier_id" value={filters.supplier_id} onChange={handleFilterChange}>
    <option value="">Select Supplier</option>
    {supplierList.map((supplier) => (
      <option key={supplier.supplier_id} value={supplier.supplier_id}>
        {supplier.company_name}
      </option>
    ))}
  </Input>
</Col>

       <Col md={2}>
  <Input type="text" name="mode_of_payment" placeholder="Mode of Payment" value={filters.mode_of_payment} onChange={handleFilterChange} />
</Col>

      </Row>

      <Row className="mb-3">
        <Col md={10}>
          <Button color="primary" onClick={handleSearch}><i className="fa fa-search" /></Button>{' '}
          <Button color="secondary"><i className="fa fa-print" /></Button>{' '}
          <Button color="danger"><i className="fa fa-trash" /></Button>
        </Col>
       
      </Row>

     <Table bordered hover size="sm" className="bg-white">
  <thead>
    <tr>
      <th>#</th> {/* Serial Number */}
      <th>Edit</th>
      <th>Flag</th>
      <th>Receipt Code</th>
      <th>Amount</th>
      <th>Company Name</th>
      <th>Mode Of Payment</th>
      <th>Status</th>
      <th>Date</th>
      <th>Invoice ID</th>
      <th>Receipt ID</th>
    </tr>
  </thead>
  <tbody>
    {goodsReturns.length > 0 ? goodsReturns.map((item, index) => (
      <tr key={item.receipt_id}>
        <td>{index + 1}</td> {/* Serial Number */}
        <td>
          
                          <Link to={`/ReceiptEdit/${item.receipt_id}`}>
          <Button color="link" onClick={() => console.log('Edit', item.receipt_id)}>
            <i className="fa fa-edit" />
          </Button>
          </Link>
        </td>
        <td>
          <i
            className="fa fa-flag"
            style={{ color: item.flagged ? 'red' : '#ccc', cursor: 'pointer' }}
            onClick={() => console.log('Flag clicked', item.receipt_id)}
          />
        </td>
        <td>{item.receipt_code}</td>
        <td>{item.amount}</td>
        <td>{item.company_name}</td>
        <td>{item.mode_of_payment}</td>
        <td>{item.status}</td>
        <td>{moment(item.receipt_date).format('YYYY-MM-DD')}</td>
        <td>{item.invoice_id}</td>
        <td>{item.receipt_id}</td>
      </tr>
    )) : (
      <tr>
        <td colSpan="11" className="text-center">No data available in table</td>
      </tr>
    )}
  </tbody>
</Table>

      <div className="d-flex justify-content-between px-2">
        <span>Total Records : {totalRecords}</span>
        <div>
          <Button size="sm" disabled={currentPage === 1} onClick={handlePrev}>Previous</Button>{' '}
          <Button size="sm" onClick={handleNext}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
