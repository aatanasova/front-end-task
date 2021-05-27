import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from './Card/Card'
import NewContactModal from "../Modal/NewContactModal";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import './Entities.css';
import CloseUpIcon from "../../Images/closeUp.png";
import TableComponent from "../Table/TableComponent";

const identificationData = 
    {id:1, companyName:'Assicurazioni Generali Spa', leiCode:'BFXS5XCH70NOYMN99POR', vatNumber:'BFXS5XCH70NOYMN99POR', companyEmail:'example@example.com', companyPhone:'00-00-00000000', companyFax:'0000-000-00000'}

const contactInformation = [
    {id: 1, fullName: 'Diana Moss', position: 'CFO', email:'diana.m@abnamaro.com', mobilePhone: '+ 000 00 111 1111', businessPhone: '+ 000 00 111 1111', fax: ' + 000 00 111 1111'},
    {id: 2, fullName: 'Diana Moss', position: 'CFO', email:'diana.m@abnamaro.com', mobilePhone: '+ 000 00 111 1111', businessPhone: '+ 000 00 111 1111', fax: ' + 000 00 111 1111'},
    {id: 3, fullName: 'Diana Moss', position: 'CFO', email:'diana.m@abnamaro.com', mobilePhone: '+ 000 00 111 1111', businessPhone: '+ 000 00 111 1111', fax: ' + 000 00 111 1111'},
    {id: 4, fullName: 'Diana Moss', position: 'CFO', email:'diana.m@abnamaro.com', mobilePhone: '+ 000 00 111 1111', businessPhone: '+ 000 00 111 1111', fax: ' + 000 00 111 1111'},
    {id: 5, fullName: 'Diana Moss', position: 'CFO', email:'diana.m@abnamaro.com', mobilePhone: '+ 000 00 111 1111', businessPhone: '+ 000 00 111 1111', fax: ' + 000 00 111 1111'}
]

const columnsContactInformation = [
      {
        key: 'id',
        text: '',
      },
      {
        key: 'fullName',
        text: 'FULL NAME',
      },
      {
        key: 'position',
        text: 'POSITION',
      },
      {
        key: 'email',
        text: 'EMAIL',
      },
      {
        key: 'mobilePhone',
        text: 'MOBILE PHONE',
      },
      {
        key: 'businessPhone',
        text: 'BUSINESS PHONE',
      },
      {
        key: 'fax',
        text: 'FAX',
      },
      {
          key: 'delete',
          text: ''
      }
    
]

const columnsAddress = [
     {
        key: 'id',
        text: '',
      },
      {
        key: 'address',
        text: 'ADDRESS',
      },
      {
        key: 'city',
        text: 'CITY',
      },
      {
        key: 'province',
        text: 'PROVINCE',
      },
      {
        key: 'zip',
        text: 'ZIP',
      },
      {
        key: 'country',
        text: 'COUNTRY',
      },
      {
        key: 'civicNumber',
        text: 'CIVIC NUMBER',
      },
    
]



const addresses = [
    {id: 1, address: 'Pizza Duca Degli Abruzzi', city: 'Milano', province: 'Mi', zip: '00000', country: 'Italy', civicNumber: '0000000000000000'}

]


function Entities (props)  {
    const [contactInformationRows, setContactInformationRows] = useState(contactInformation);
    const [addressRows, setAddressRows] = useState(addresses);
    const [show, setShow] = useState(false);
    const [showOrganizationData, setOrganizationData] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowOrganizationData = () => setOrganizationData(!showOrganizationData)

    const saveContact = (contact) => {
        setShow(false)
        contactInformationRows.push(contact)
        setContactInformationRows(contactInformationRows)
    }

    const handleRemoveSpecificRow = item => () => {
        let items = contactInformationRows.filter(row => row.id != item.id);
        setContactInformationRows(items);
    }



    const getIdentificationBody = () => {
        return  <div>
                    <Row>
                        <Col xs={4}>
                            <label>Company Name</label>
                            <text>{identificationData.companyName}</text>
                        </Col>
                        <Col xs={4}>
                            <label>Lei Code</label>
                            <text>{identificationData.leiCode}</text>
                        </Col>
                        <Col xs={4}>
                            <label>Vat Number</label>
                            <text>{identificationData.vatNumber}</text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <label>Company Email</label>
                            <text>{identificationData.companyEmail}</text>
                        </Col>
                        <Col xs={4}>
                            <label>Company Phone</label>
                            <text>{identificationData.companyPhone}</text>
                        </Col>
                        <Col xs={4}>
                            <label>Company Fax</label>
                            <text>{identificationData.companyFax}</text>
                        </Col>
                    </Row>
                </div>
                
    }

    const getAdressesBody = () => {
    return <div>
                <TableComponent columns={columnsAddress} 
                                rows={addressRows} 
                                showDeleteAction={false}
                />
           </div>
    }


    const getContactInformationBody = () => {
        return <div>
                    <TableComponent columns={columnsContactInformation} 
                                    rows={contactInformationRows}
                                    showDeleteAction={true}
                                    onDelete={handleRemoveSpecificRow}
                    />
                    <NewContactModal show={show} handleClose={handleClose} onSave={saveContact}/>
                </div>
    }

   
    return (
        <>
         <Container fluid>
             <Header />
                <Row>
                    <Col xs={4}>
                        <Sidebar data={identificationData}/>
                    </Col>

                    <Col  xs={{ span: 7, offset: 3 }}>
                        <div className="organization-data-container">
                            <span className="organization-data" onClick={handleShowOrganizationData}>ORGANIZATION DATA: <img src={CloseUpIcon}/></span>
                        </div>
                        {showOrganizationData &&
                            <div>
                                <CardComponent title="Identification Data" body={getIdentificationBody} isContactInformationTable={false}/>
                                <CardComponent title="Adresses" body={getAdressesBody} isContactInformationTable={false}/>
                                <CardComponent title="Contact Information" body={getContactInformationBody} isContactInformationTable={true} onShow={handleShow}/>

                            </div>
                        }

                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  export default Entities