import React from 'react'
import connect from '@lib/connect'
import './index.less'
@connect
export default class Home extends React.Component {
  render () {
    return (
      <a href="/user">
        {this.props.goods.map(item => {
          return (
            <div key={item} className="test">
              good{item}
            </div>
          )
        })}
      </a>
    )
  }
}
