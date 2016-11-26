import React, { Component } from 'react'

class DeleteWithConfirmation extends Component {
  render () {
    const id = this.props.id
    return (
      <span>
        <i className="fa fa-trash" aria-hidden="true" data-toggle="modal" data-target={'#modal' + id}></i>
        <div className="modal fade" id={'modal' + id} tabIndex="-1" role="dialog" aria-labelledby="modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close"
                  data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Suppression</h4>
              </div>
              <div className="modal-body">
                Supprimer définitivement {this.props.label} ?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {
                  this.props.remove()
                }}>Valider</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal">Annuler</button>
              </div>
            </div>
          </div>
        </div>
      </span>
    )
  }
}

export default DeleteWithConfirmation
