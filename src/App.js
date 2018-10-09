import React, { Component } from 'react';
import _ from 'lodash';
import { Search, Grid,  Segment, Item } from 'semantic-ui-react';
import './App.css';
import source from './clients.json';
import Client from './components/client/Client';
import ClientDetails from './components/client/ClientDetails/ClientDetails';


export default class App extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: source, value: '' , clientChoosen: false})

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')

      const isMatch = result => {
       
        return re.test(JSON.stringify(result))
      }

      let data = _.filter(source, isMatch);

      if(!data){
        data = source;
      }

      this.setState({
        isLoading: false,
        results: data
      })
    }, 300)
  }
  clientCliked = (client) => {
    this.setState({clientChoosen: client})
  }

  render() {
    const { isLoading, value } = this.state;
    const clients = this.state.results.map((client, index) => {
        return <Client 
          key={index} 
          data={client} 
          clientCliked = {this.clientCliked}/>
      })
    return (
      <Grid className='ui container' columns='equal' celled='internally'>
        <Grid.Column width={4}>
          <Search className="big"
            loading={isLoading}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            value={value}
            {...this.props}
          />
          <Item.Group>
            {clients}
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
          
          <ClientDetails data={this.state.clientChoosen} />
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}



