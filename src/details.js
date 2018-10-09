/*import React, { Component } from "react";
import { connect } from "react-redux";
import {setClientAction} from "action/details.js";
import { Search, Grid, Header, Segment, Item } from 'semantic-ui-react';
import source from './clients.json';

class Client extends Component{
       
        componentDidMount(){
                this.props.setClient(????);
        }
        getProductById(id)
        
{
        for(var j in this.props.products){
                if(this.props.products[j]['_id'] === id){
                        return this.props.products[j];
                }
                return false;
        }
}        render(){
        const client = source;
        return ( 
                <Grid>
                <Item>
                <Grid.Column width={5}> 
                <Item.Image className='ui big left aligned image' src={client.general.avatar}/>
                </Grid.Column>
                <Grid.Column width={9}>
                <Item.Content>
                <Item.Header as='a' className="hedList">{client.general.firstName + ' ' + client.general.lastName}</Item.Header>
                <Item.Description className="descripList">
                  {client.job.title}
                </Item.Description>
              </Item.Content>
                </Grid.Column>
                </Item>
              </Grid>
              
        )
}
}

export default connect(
        state => ({            
        }),
    
        dispatch => ({
                setClient: (d)=>{
                setClientAction(d, dispatch);
            }
        })
    )(Client);*/
