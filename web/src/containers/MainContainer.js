import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { 
  Icon, 
  Button, 
  Label, 
  Menu, 
  Table,
  Dropdown,
  Input
} from 'semantic-ui-react'

// import TableCell from '../components/TableCell'
import Actions from '../actions'
import Styles from './MainContainer.style.js'
import Utils from '../utils/utils'

class MainContainer extends Component {
  // 构造函数，在创建组件的时候调用一次
  constructor(props){
    super(props);
  }

  //在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次
  componentWillMount(){
    const {Load} = this.props;
    Load();
  }

  // 在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs
  componentDidMount() {

  }

  // props是父组件传递给子组件的。
  // 父组件发生render的时候子组件就会调用componentWillReceiveProps
  //（不管props有没有更新，也不管父子组件之间有没有数据交换）
  componentWillReceiveProps(nextProps){

  }

  // 组件挂载之后，每次调用setState后都会
  // 调用shouldComponentUpdate判断是否需要重新渲染组件。
  // 默认返回true，需要重新render。
  // 在比较复杂的应用里，有一些数据的改变并不影响界面展示，
  // 可以在这里做判断，优化渲染效率
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  // shouldComponentUpdate返回true或者调用forceUpdate之后，
  // componentWillUpdate会被调用
  componentWillUpdate(nextProps, nextState){

  }

  // 除了首次render之后调用componentDidMount，
  // 其它render结束之后都是调用componentDidUpdate。
  // componentWillMount、componentDidMount和componentWillUpdate、componentDidUpdate可以对应起来。
  // 区别在于，前者只有在挂载的时候会被调用；而后者在以后的每次更新渲染之后都会被调用。
  componentDidUpdate() {

  }

  // 组件被卸载的时候调用。一般在componentDidMount里面注册的事件需要在这里删除。
  componentWillUnmount() {

  }

  handleChange = (event, index, value) => this.setState({value});

  renderTableRowColumn(key, value, data) {
    let item = null;
    if (Utils.IsArray(value)) {
      let str = key + '[' + value.length + ']';
      item = (<Button label={str} />)
    }
    else if (Utils.IsObject(value)) {
      let str = key + '[+]';
      item = (<Button label={str} />)
    }
    else if (Utils.IsBoolean(value)) {
      item = (
        <Dropdown 
          placeholder={key} 
          fluid 
          selection 
          options={[{text:'true', value:true}, {text:'false', value:false}]} 
          onChange={(event, index, value)=> {
            data[key] = value;
          }}
        />
      );
    }
    else{
      item = (
        <Input
          label={value}
        />);
    }

    return (<Table.Row>{item}</Table.Row>); 
  }

  renderObject(data) {
    var cols = [];
    for (var id in data){
      let item = <Table.Cell id={id} data={data} />
      cols.push(item);
    }
    return (
      <Table selectable={false}>
        <Table.Body displayRowCheckbox={false} >
          <Table.Row striped={true} rowNumber={1} >{cols}</Table.Row>
        </Table.Body>
      </Table>);
  }

  renderArray(array) {

  }

  // render是一个React组件所必不可少的核心函数（上面的其它函数都不是必须的）。
  // 记住，不要在render里面修改state
  render() {
    const {app} = this.props;
    return (
      <div>
        {this.renderTitle()}
        {this.renderObject(this.props.app.jsonFiles)}
      </div>
    );
  }

  renderTitle() {
    const {app} = this.props;
    return (
      <div style={Styles.Title}>
        <Label size='Huge'>{app.appInfo.title}</Label>
      </div>
    );
  }
}

export default connect(
  state => ({
    app:state.app
  }),
  (dispatch) => {
    return bindActionCreators({
      Load: Actions.Load,
    }, dispatch);
  }
)(MainContainer);
