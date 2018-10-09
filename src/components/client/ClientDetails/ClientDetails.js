import React from 'react';
import { Item, GridColumn} from 'semantic-ui-react';


const ClientDetails = (props) => {
  let details = <p>Click Client to see more...</p>;
  

  if (props.data) {
    details = 
        <Item>
          <GridColumn>
          <Item.Image className='clientImage' src={props.data.general.avatar} bordered/>
          </GridColumn>
          <GridColumn>
          <Item.Content className="textClient">
            <Item.Header as='a' className="hedDetails">{props.data.general.firstName + ' ' + props.data.general.lastName}</Item.Header>
              <Item.Extra className="descripDetails">
            {props.data.job.title}
            </Item.Extra>
            <Item.Extra className="descripDetails">
            {props.data.job.company}
            </Item.Extra>
            <Item.Description className="descripDetails">
            <i class="fas fa-phone"></i>
            {' ' + props.data.contact.phone} <br/> 
            <i class="fas fa-envelope"></i>
            {' ' + props.data.contact.email}
            </Item.Description>
            <Item.Description className="descripDetails">
            <i class="fas fa-home"></i>
            {' '+ props.data.address.country + ', ' + props.data.address.zipCode + ', ' + props.data.address.city + ', ' + props.data.address.street}
            </Item.Description>
            </Item.Content>
            </GridColumn>
        </Item>
  }


  return <div>{details}</div>;
}






  
  export default ClientDetails;