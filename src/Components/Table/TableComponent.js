import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = props => {

    return (
            <Table striped  hover responsive="sm">
                      <thead>
                          <tr>
                          {props.columns.map((column, index) => {
                            return <th key={index}>{column.text}</th>
                          })}
                          </tr>
                      </thead>
                      <tbody>
                      {props.rows.map((contact, index) => 
                              { return <tr key={index}>
                                {Object.keys(contact).map(k => <td>{contact[k]}</td>)}
                                          {props.showDeleteAction ? <td><button className="delete-btn" onClick={props.onDelete(contact)}>Delete</button></td> : '' }
                                      </tr>
                              })}
                      </tbody>
          </Table>
    )
}
  export default TableComponent