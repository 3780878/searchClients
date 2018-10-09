import React from 'react';
import { Item } from 'semantic-ui-react';

const Client = (props) => {
    return(
      <Item onClick={() => props.clientCliked(props.data)}>
        <Item.Image className='ui mini middle aligned image' src={props.data.general.avatar}/>
        <Item.Content>
          <Item.Header as='a' className="hedList">{props.data.general.firstName + ' ' + props.data.general.lastName}</Item.Header>
          <Item.Description className="descripList">
            {props.data.job.title}
          </Item.Description>
        </Item.Content>
      </Item>
  )
}

export default Client;