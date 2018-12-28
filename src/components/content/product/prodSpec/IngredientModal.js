import React from 'react';

export const IngredientModal = ()=>{
    return(
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-custom modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-custom-header modal-header">
                    <img src={require('../../../../assets/images/icons/sales.png')} alt=""/>
                    <h5 className="modal-title" id="exampleModalLongTitle">성분명</h5>
                    <p>-4-isothiazolin-3-one</p>
                    <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-custom-body modal-body">
                    <p className="modal-para">EWG 등급</p>
                    <div className="popup-icon-detail">
                        <br/>
                        <img src={require('../../../../assets/images/icons/iconD.png')} alt=""/>
                        <p>높은 위험</p>
                        <p className="popup-ingr-para">사용량/사용법에 따라 C-D 등급</p>
                    </div>
                    <p className="modal-para">주의성분</p>
                    <div className="popup-icon-level">
                        <img src={require('../../../../assets/images/icons/icon1.png')} alt=""/>
                        <p>미 환경보호 (EPA): 유해성 논란 성분</p>
                    </div>
                    <div className="popup-category">
                        <p className="modal-para">유해성분</p>
                    </div>
                    <div className="popup-icon-level">
                        <img src={require('../../../../assets/images/icons/icon1.png')} alt=""/>
                        <p>국내 유해화학물질: 유독물질</p>
                    </div>
                    <div className="popup-category">
                        <p className="modal-para">배합용도</p>
                    </div>
                    <div className="popup-result">
                        <p>살균보존제</p>
                    </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
        </div>
    )
}