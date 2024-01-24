import React from 'react'
import './Brother.css'

const brotherFolder = require.context('./brothers', false);

export default class Brother extends React.Component {
  render() {
    let src = 'blank.png'
    let notFound = false;
    try {
      src = brotherFolder('./' + this.props.brotherName + '.jpg', true);
    } catch(e) {
      src = brotherFolder('./blank.png', true);
      notFound = true;
    }

    return (
      <div className='brother'>
        <div className={(notFound) ? 'crop blank' : 'crop'}>
          <img src={src} alt='' />
        </div>
        <h3>{this.props.brotherName}</h3>
        <h5>{this.props.chair}</h5>
      </div>
    );
  }
}