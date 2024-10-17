import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import api from '../../constants/api';
import ComponentCard from '../../components/ComponentCard';
import creationdatetime from '../../constants/creationdatetime';

const ProjectDetails = () => {
  // Navigation and Parameter Constants
  const navigate = useNavigate();
  const [company, setCompany] = useState();
  const [incorpDate, setIncorpDate] = useState(null);
  const [yearEnd, setYearEnd] = useState(null);
  //  insertClient
  const [clientForms, setClientForms] = useState({
    title: '',
    company_id: '',
    category: '',
    project_code: '',
    new_company: '',
    old_company_id: '',
    had_agm_before: '',
    last_agm_date: '',
    filing_date: '',
  });

 
  //Client Functions/Methods
  const handleClientForms = (e) => {
    setClientForms({ ...clientForms, [e.target.name]: e.target.value });
    
  };

  const handleCompany=(e)=>{
    console.log('companychange')
    const selectedObjectId = Number(e.target.value);
    const selectedObjectData = company.find((obj) => obj.company_id === selectedObjectId);
console.log('incorpobj',selectedObjectData)
    setIncorpDate(selectedObjectData.date_of_incorporation);
    setYearEnd(selectedObjectData.category);
  }
 

  const arra = [
    {
      title: 'Preparation of docs for Signing',
      status: 'Due',
    },
  ];
  const arraa = [
    {
      title: 'Name Application',
      status: 'Due',
    },
  ];
  const arraaa = [
    {
      title: 'Incorporation with ACRA',
      status: 'Due',
    },
  ];
  const arraaaa = [
    {
      title: 'Others',
      status: 'Due',
    },
  ];

 

  const insertArray=async(dates,agmdates,prid)=>{
    console.log('incorpDate:', incorpDate);
    console.log('dates:', dates);
    
    const minDate = moment.min(
      moment(incorpDate).add(18, 'months'),
      moment(dates).add(6, 'months')
    );
    console.log('minDate:', minDate);
    
    const dueDate = minDate.format('Do MMM YY');
    console.log('dueDate:', dueDate);

    const dueDateYear = moment(dueDate, 'Do MMM YY').year();
    console.log('test',dueDateYear)

    console.log('agmdate:', agmdates);
    console.log('dates:', dates);
    
    const minDateforLastAgm = moment.min(
      moment(agmdates).add(15, 'months'),
      moment(dates).add(6, 'months')
    );
    console.log('minDateforLastAgm:', minDateforLastAgm);
    const duelastAgmdate = minDateforLastAgm.format('Do MMM YY');
    console.log('duelastAgmdate:', duelastAgmdate);

    const duelastAgmdateYear = moment(duelastAgmdate, 'Do MMM YY').year();
    console.log('test1',duelastAgmdateYear)

     if (clientForms.had_agm_before === '0') {
  const array1 = [
    {
      title: 'Date of Accounts Laid',
      status: 'Due',
      due_date: moment(dates).format('Do MMM YY'),
    },
  
    {
      title: 'ECI',
      status: 'Due',
      due_date: moment(dates).add(3, 'months').add(1, 'days').format('Do MMM YY'),
    },
    {
      title: 'AGMdate',
      status: 'Due',
      due_date: dueDate,
    },
  
    {
      title: 'Form C / Form CS',
      status: 'Due',
      due_date: moment().year(dueDateYear).date(30).month(10).format('Do MMM YY'),

    },
 
    {
      title: 'ARdate',
      status: 'Due',
      due_date: moment(dates).add(7, 'months').format('Do MMM YY'),
    },
  ];

  await array1.forEach(async(element) => {
    element.project_id = prid;
    await api
      .post('/project/insertTask', element)
      .then(() => {
        //  setNewTaskData()
      })
      .catch(() => {});
  });
}else if (clientForms.had_agm_before === '1'){
  const array1 = [
    {
      title: 'Date of Accounts Laid',
      status: 'Due',
      due_date: moment(dates).format('Do MMM YY'),
    },
  
    {
      title: 'ECI',
      status: 'Due',
      due_date: moment(dates).add(3, 'months').add(1, 'days').format('Do MMM YY'),
    },
 
    {
      title: 'AGMdate',
      status: 'Due',
      due_date: duelastAgmdate,
    },
  
    {
      title: 'Form C / Form CS',
      status: 'Due',
      due_date: moment().year(duelastAgmdateYear).date(30).month(10).format('Do MMM YY'),
    },
 
    {
      title: 'ARdate',
      status: 'Due',
      due_date: moment(dates).add(7, 'months').format('Do MMM YY'),
    },
  ];

  await array1.forEach(async(element) => {
    element.project_id = prid;
    await api
      .post('/project/insertTask', element)
      .then(() => {
        //  setNewTaskData()
      })
      .catch(() => {});
  });

}
  }

  const insertTask = async (proid) => {
    console.log('inserting task');
    if (clientForms.category === 'Incorporation') {
      await arra.forEach((element) => {
        element.project_id = proid;
        api
          .post('/project/insertTask', element)
          .then(() => {
            //  setNewTaskData()
          })
          .catch(() => {});
      });
    }
    if (clientForms.category === 'Incorporation') {
      await arraa.forEach((element) => {
        element.project_id = proid;
        api
          .post('/project/insertTask', element)
          .then(() => {
            //  setNewTaskData()
          })
          .catch(() => {});
      });
    }
    if (clientForms.category === 'Incorporation') {
      await arraaa.forEach((element) => {
        element.project_id = proid;
        api
          .post('/project/insertTask', element)
          .then(() => {
            //  setNewTaskData()
          })
          .catch(() => {});
      });
    }
    if (clientForms.category === 'Incorporation') {
      await arraaaa.forEach((element) => {
        element.project_id = proid;
        api
          .post('/project/insertTask', element)
          .then(() => {
            //  setNewTaskData()
          })
          .catch(() => {});
      });
    }
  
    if (clientForms.category === 'Year End Accounts') {
     await insertArray(clientForms.filing_date,clientForms.last_agm_date,proid );
    }
  };
  const insertProject = async(code) => {
    if (clientForms.title !== '' && clientForms.company_id !== '' && clientForms.category !== '') {
      clientForms.creation_date = creationdatetime;
      clientForms.project_code = code;
      await api
        .post('/project/insertProject', clientForms)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          insertTask(insertedDataId);
          message('Project inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/ProjectEdit/${insertedDataId}?tab=1`);
          }, 300);
        })
        .catch(() => {
          message('Network connection error.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  const getCompany = () => {
    api
      .get('/company/getCompany')
      .then((res) => {
        setCompany(res.data.data);
      })
      .catch(() => {
        message('No Incharge found', 'info');
      });
  };
 console.log('year end',yearEnd)
  //QUTO GENERATED CODE
  const generateCode = async () => {
    if (incorpDate !== null && clientForms.category === 'Incorporation') {
      message('Already incorporated', 'yellow');
    } else if (incorpDate === null && clientForms.category === 'Year End Accounts') {
      message(' This company not incorporated', 'red');
    }
    else if (yearEnd === 'Year End Accounts' && clientForms.category === 'Year End Accounts') {
      message(' Please Note that Year End Accounts Project has already been created for the company  ', 'red');
    } else {
      await api
        .post('/tender/getCodeValue', { type: 'project' })
        .then((res) => {
          insertProject(res.data.data);
        })
        .catch(() => {
          insertProject('');
        });
    }
  };
  
  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6" xs="12">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Col md="12">
                  <Label>
                    Title <span className="required"> *</span>{' '}
                  </Label>

                  <Input
                    type="text"
                    name="title"
                    onChange={(e) => {
                      handleClientForms(e);
                    }}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md="12">
                  <Label>
                    Company<span className="required"> *</span>
                  </Label>
                  <Input
                    type="select"
                    value={clientForms && clientForms.company_id}
                    onChange={(e)=>{handleCompany(e);handleClientForms(e)}}
                    name="company_id"
                  >
                    <option value="" selected="selected">
                      Please Select
                    </option>
                    {company &&
                      company.map((e) => {
                        return (
                          <option value={e.company_id} key={e.company_id}>
                            {e.company_name}
                          </option>
                        );
                      })}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md="12">
                  <Label>
                    Category <span className="required"> *</span>
                  </Label>
                  <Input
                    type="select"
                    onChange={handleClientForms}
                    value={clientForms && clientForms.category}
                    name="category"
                  >
                    <option defaultValue="selected">Please Select</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Incorporation">Incorporation</option>
                    <option value="Others">Others</option>
                    <option value="Secretarial Services">Secretarial Services</option>
                    <option value="Tax services">Tax services</option>
                    <option value="Year End Accounts">Year End Accounts</option>
                  </Input>
                </Col>
              </FormGroup>
              {clientForms && clientForms.category === 'Incorporation' && (
                <Col md="6">
                  <Label>New Company</Label>
                  <FormGroup>
                    <Input
                      type="radio"
                      name="new_company"
                      value="1"
                      onChange={handleClientForms}
                      defaultChecked={clientForms && clientForms.new_company === 1 && true}
                    ></Input>
                    &nbsp;&nbsp;
                    <Label>Yes</Label>&nbsp;&nbsp;
                    <Input
                      type="radio"
                      name="new_company"
                      value="0"
                      onChange={handleClientForms}
                      defaultChecked={clientForms && clientForms.new_company === 0 && true}
                    ></Input>
                    &nbsp;&nbsp;
                    <Label>No</Label>
                  </FormGroup>
                </Col>
              )}
              {clientForms && clientForms.new_company === '0' && (
                <Col md="12">
                  <FormGroup>
                    <Label>Old Company</Label>
                    <Input
                      type="select"
                      value={clientForms && clientForms.old_company_id}
                      onChange={(e)=>{handleClientForms(e);}}
                      name="old_company_id"
                    >
                      <option value="" selected="selected">
                        Please Select
                      </option>
                      {company &&
                        company.map((e) => {
                          return (
                            <option value={e.company_id} key={e.company_name}>
                              {e.company_name}
                            </option>
                          );
                        })}
                    </Input>
                  </FormGroup>
                </Col>
              )}
              {clientForms && clientForms.category === 'Year End Accounts' && (
                <Col md="6">
                  <Label>Company had AGM before?</Label>
                  <FormGroup>
                    <Input
                      type="radio"
                      name="had_agm_before"
                      value="1"
                      onChange={handleClientForms}
                      defaultChecked={clientForms && clientForms.had_agm_before === 1 && true}
                    ></Input>
                    &nbsp;&nbsp;
                    <Label>Yes</Label>&nbsp;&nbsp;
                    <Input
                      type="radio"
                      name="had_agm_before"
                      value="0"
                      onChange={handleClientForms}
                      defaultChecked={clientForms && clientForms.had_agm_before === 0 && true}
                    ></Input>
                    &nbsp;&nbsp;
                    <Label>No</Label>
                  </FormGroup>
                </Col>
              )}
              {clientForms && clientForms.had_agm_before === '1' && (
                <Col md="4">
                  <FormGroup>
                    <Label>Last AGM Date</Label>
                    <Input
                      type="Date"
                      onChange={handleClientForms}
                      value={clientForms && clientForms.last_agm_date}
                      name="last_agm_date"
                    />
                  </FormGroup>
                </Col>
              )}
              {clientForms && clientForms.had_agm_before === '1' && (
                <Col md="4">
                  <FormGroup>
                    <Label>Next FYE Date</Label>
                    <Input
                      type="Date"
                      onChange={handleClientForms}
                      value={clientForms && clientForms.filing_date}
                      name="filing_date"
                    />
                  </FormGroup>
                </Col>
              )}
              {clientForms && clientForms.had_agm_before === '0' && (
                <Col md="4">
                  <FormGroup>
                    <Label>Next FYE Date</Label>
                    <Input
                      type="Date"
                      onChange={handleClientForms}
                      value={clientForms && clientForms.filing_date}
                      name="filing_date"
                    />
                  </FormGroup>
                </Col>
              )}
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      color="primary"
                      onClick={() => {
                        generateCode();
                      }}
                      type="button"
                      className="btn mr-2 shadow-none"
                    >
                      Save & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            'Are you sure you want to cancel  \n  \n You will lose any changes made',
                          )
                        ) {
                          navigate(-1);
                        }
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
                    >
                      Cancel
                    </Button>
                  </div>
                </Row>
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
