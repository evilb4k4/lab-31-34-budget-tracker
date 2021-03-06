import React from 'react'
import { connect } from 'react-redux'
import {categoryCreate} from '../../action/category-action.js'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.categoryCreate(Object.assign({}, this.state))
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="budget"
          type="number"
          placeholder="budget"
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type="submit">add budget</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)
