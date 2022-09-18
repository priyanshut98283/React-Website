import React, { Component } from 'react'
import '/ReactApp/firstapp/src/appStyles.css'
import styles from '/ReactApp/firstapp/src/appStyles.module.css'


class ExternalStyle extends Component {
  render() {
    return (
      <div>
        <h1 className='error'>error</h1>
        <h1 className={styles.success}>success</h1>
      </div>
    )
  }
}
export default ExternalStyle
