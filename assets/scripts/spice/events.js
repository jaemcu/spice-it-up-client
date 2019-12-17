'use strict'

const api = require('./api.js')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// GET INDEX / GET ALL SPICES
const onGetSpices = function (event) {
  event.preventDefault()
  api
    .index()
    .then(ui.indexSuccess)
    .catch(ui.onFailure)
  console.log('Works')
}

//
// // DELETE SPICE / DELETE ONE SPICE
const onDeleteSpice = function (event) {
  event.preventDefault()
  const formData = $(event.target).data('id')
  // const formData = getFormFields(event.target)
  api.destroy(formData)
    .then(ui.deleteSuccess)
    .catch(ui.onFailure)
}
//
// // UPDATE SPICE/ UPDATE ONE SPICE
//
// const onUpdateSpice = function(event) {
//   event.preventDefault()
//
//   let data = getFormFields(event.target)
//   spicesApi.update(data)
//     .then(spicesUi.onUpdateSuccess)
//     .catch(spicesUi.onError)
// }

// CREATE SPICE / MAKE NEW SPICE
const onCreateSpice = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.create(formData)
    .then(ui.createSpiceSuccess)
    .catch(ui.createSpiceFailure)
}

const addHandlers = event => {
  $('.spices').on('submit', onGetSpices)
  $('.delete-spice').on('submit', onDeleteSpice)
  // $('#update-spice').on('click', onUpdateSpice)
  $('.create-spice').on('submit', onCreateSpice)
}

module.exports = {
  addHandlers
}
