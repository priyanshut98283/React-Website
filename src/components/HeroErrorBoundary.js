import React, { Component } from 'react'

function HeroErrorBoundary({heroName}) {
  if(heroName==='Joker'){
    throw new Error('Not a Hero')
  }
  return (
    <div>HeroErrorBoundary <hr/>
        {heroName}
        <hr/>
    </div>
  )
}

export default HeroErrorBoundary


export class ErrorFixing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
  render() {
    if(this.state.hasError){
        return <h1>Something Went Wrong</h1>
    }
    return (
      this.props.children
    )
  }
}
