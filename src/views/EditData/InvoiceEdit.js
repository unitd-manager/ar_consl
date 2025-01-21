import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import { ToastContainer } from 'react-toastify';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ValueListButton from '../../components/InvoiceTable/ValueListButton';
import ValueListEditDetails from '../../components/InvoiceTable/ValueListEditDetails';
// import CreationModification from '../../components/ValueListTable/CreationModification';
import message from '../../components/Message';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';

const ValueListEdit = () => {
  // All state variables
  const [valuelisteditdetails, setValueListEDitDetails] = useState();

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();

  //All Functions/Methods
  //Setting Data in ValueList Details
  const handleInputs = (e) => {
    setValueListEDitDetails({ ...valuelisteditdetails, [e.target.name]: e.target.value });
  };

  // Route Change
  const applyChanges = () => {};
  const saveChanges = () => {
      navigate('/Invoice');
      setTimeout(() => {
        window.location.reload()
    }, 1000);
  };
  const backToList = () => {
    navigate('/Invoice');
  };

  //Api call for getting ValueList By Id
  const getValueListById = () => {
    api
      .post('/invoice/getInvoiceProjectById', { invoice_id: id })
      .then((res) => {
        setValueListEDitDetails(res.data.data[0]);
      })
      .catch(() => {
        message('ValueList Data Not Found', 'info');
      });
  };

  

  //Api call for  Editting ValueList
  const editValueListData = () => {
      valuelisteditdetails.modification_date = creationdatetime
      api
        .post('/invoice/editInvoice', valuelisteditdetails)
        .then(() => {
          message('Record editted successfully', 'success');
          getValueListById()
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
 
  };

  //Api call for  Deletting ValueList
  const deleteValueListData = () => {
    api
      .post('/invoice/deleteInvoiceProject', { invoice_id: id })
      .then(() => {
        message('Record editted successfully', 'success');
      })
      .catch(() => {
        message('Unable to edit record.', 'error');
      });
  };

  useEffect(() => {
    getValueListById();
  }, [id]);

  return (
    <>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>

      {/* ValueList Button Details */}
      <ValueListButton
        saveChanges={saveChanges}
        applyChanges={applyChanges}
        backToList={backToList}
        editValueListData={editValueListData}
        deleteValueListData={deleteValueListData}
        navigate={navigate}
        id={id}
      ></ValueListButton>

      {/* ValueList Edit Details */}
      <ValueListEditDetails
        valuelisteditdetails={valuelisteditdetails}
        handleInputs={handleInputs}
   
        id={id}
      ></ValueListEditDetails>

      {/* Creation and Modification Form */}
      {/* <CreationModification valuelisteditdetails={valuelisteditdetails}></CreationModification> */}
    </>
  );
};
export default ValueListEdit;
