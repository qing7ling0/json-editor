'use strict'
import React, {Component} from 'react'
import {
  FlatButton,
  TextField,
  SelectField,
  MenuItem,
  IconButton
} from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {purple500} from 'material-ui/styles/colors';

import Utils from '../utils/utils'

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : null,
      selected: false,
    }
  }

  //在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次
  componentWillMount(){
    const {id, data} = this.props;
    this.state.value = data[id];
  }
  
  renderExptand() {
    const {id, data} = this.props;
    return (
      <div>
        <div style={styles.CellTitle}>{id}</div>
        <IconButton iconClassName="muidocs-icon-custom-github" />
      </div>
    );
  }

  render() {
    const {id, data} = this.props;
    let item = null;
    let value = this.state.value;
    if (Utils.IsArray(value)) {
      let str = id + '[' + value.length + ']';
      // item = (<FlatButton label={str} />)
      item = this.renderExptand();
    }
    else if (Utils.IsObject(value)) {
      let str = id + '[+]';
      // item = (<FlatButton label={str} />)
      item = this.renderExptand();
    }
    else if (Utils.IsBoolean(value)) {
      item = (<SelectField
        floatingLabelText={id}
        floatingLabelStyle={styles.CellTitle}
        value={value}
        fullWidth={true}
        onChange={(event, index, value)=> {
          this.onChange(value);
        }}
      >
        <MenuItem value={true} primaryText="True" />
        <MenuItem value={false} primaryText="False" />
      </SelectField>);
    }
    else{
      item = (
        <TextField
          hintText=""
          defaultValue={value}
          floatingLabelText={id}
          floatingLabelFixed={true}
          floatingLabelStyle={styles.CellTitle}
          fullWidth={true}
          multiLine={true}
          onChange={(event, value) =>{
            this.onChange(value);
          } }
        />);
    }

    return (<TableRowColumn>{item}</TableRowColumn>); 
  }

  onChange = (value) => {
    this.setState({value:value});
    this.props.data[this.props.id] = value;
  }
}
    
const styles = {
  CellTitle: {
    fontSize: '28px',
    color: purple500,
    fontWeight: '500'
  }
};

export default TableCell;