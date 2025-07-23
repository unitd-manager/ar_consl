import React from 'react';
import { Row, Form, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function LeavePastHistory({ PastleavesDetails, leavesDetails }) {
  LeavePastHistory.propTypes = {
    PastleavesDetails: PropTypes.any,
    leavesDetails: PropTypes.object,
  };

  let pastLeaves = [];
  if (PastleavesDetails) {
    pastLeaves = PastleavesDetails.filter((el) => {
      return (
        el.leave_id !== leavesDetails.leave_id &&
        new Date(leavesDetails.date) >= new Date(el.date)
      );
    });
  }

  const columns = [
    { name: 'From Date' },
    { name: 'To Date' },
    { name: 'Leave Type' },
    { name: 'No of Days' },
  ];

  return (
    <Form>
      <Row>
        <Table id="example1" className="display border border-secondary rounded">
          <thead>
            <tr>
              {columns.map((cell) => (
                <td key={cell.name}>{cell.name}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {pastLeaves &&
              pastLeaves.map((element) => (
                <tr key={element.employee_id}>
                  <td>{moment(element.from_date).format('YYYY-MM-DD')}</td>
                  <td>{moment(element.to_date).format('YYYY-MM-DD')}</td>
                  <td>{element.leave_type}</td>
                  <td>
                    {element.no_of_days
                      ? element.no_of_days_next_month
                        ? parseFloat(element.no_of_days) + parseFloat(element.no_of_days_next_month)
                        : element.no_of_days
                      : ''}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Form>
  );
}
