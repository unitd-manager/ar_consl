import React from 'react'
import {Nav,NavItem,NavLink} from 'reactstrap';
import PropTypes from 'prop-types'

export default function NavTabs({toggle,activeTab}) {
    NavTabs.propTypes = {
        toggle: PropTypes.func,
        activeTab:PropTypes.any
          }
  return (
    <Nav tabs>
    <NavItem>
      <NavLink
        className={activeTab === '1' ? 'active' : ''}
        onClick={() => {
          toggle('1');
        }} >Officers/Authorised Representative
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '2' ? 'active' : ''}
        onClick={() => {
          toggle('2');
        }}>Share Transfer Linked    
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '3' ? 'active' : ''}
        onClick={() => {                 
          toggle('3');
        }}>Share Increase Linked
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '4' ? 'active' : ''}
        onClick={() => {
          toggle('4');
        }}> Company Address change  
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '5' ? 'active' : ''}
        onClick={() => {
          toggle('5');
        }}>Company Name Change  
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '6' ? 'active' : ''}
        onClick={() => {
          toggle('6');
        }}> Projects Linked
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '7' ? 'active' : ''}
        onClick={() => {
          toggle('7');
        }}> Invoice Linked
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '8' ? 'active' : ''}
        onClick={() => {
          toggle('8');
        }}>Tender Linked
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '9' ? 'active' : ''}
        onClick={() => {
          toggle('9');
        }}>Attachments
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === '10' ? 'active' : ''}
        onClick={() => {
          toggle('10');
        }}>Add notes
      </NavLink>
    </NavItem>
   
  </Nav>
  )
}
