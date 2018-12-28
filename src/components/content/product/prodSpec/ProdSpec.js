import React from 'react';
import './ProdSpec.css';
import {RatingRow} from './Ratings';
import {SecondSection} from './SecondSection';
import {ThirdSection} from './ThirdSection';
import {Comments} from './CommentsSection';
import DoughnutGraph from './DoughnutGraph';
import {IngredientModal} from './IngredientModal';
import {IngredientRow} from './IngredientRow';

import axios from 'axios';

export class ProdSpec extends React.Component{

    // Code from idsLogic - Rakesh
    constructor() {
        super();
        this.state = {
            name : '',
            image : '',
            brand : '',
            category : '',
            star : '',
            star1 : '',
            star2 : '',
            star3 : '',
            star4 : '',
            code: '',
            ewg : {
                ewg_: 0,
                ewg_A: 0,
                ewg_B: 0,
                ewg_C: 0,
                ewg_D: 0,
                ewg_F: 0,
            },
            ingredient_list: null,
        }
    }

    componentDidMount() {
        const name = this.props.match.params.name;

        const params = new URLSearchParams();
        params.append('name', `${name}`);

        axios.post('http://13.125.89.0/chemical/item_info.php', params)
            .then(itemInfo => {
                this.setState({
                    name : itemInfo.data.name,
                    image : itemInfo.data.image,
                    brand : itemInfo.data.brand,
                    category : itemInfo.data.category,
                    star : itemInfo.data.star,
                    star1 : itemInfo.data.star1,
                    star2 : itemInfo.data.star2,
                    star3 : itemInfo.data.star3,
                    star4 : itemInfo.data.star4,
                    code: itemInfo.data.code,
                    ewg: {
                        ewg_: itemInfo.data.ewg_,
                        ewg_A: itemInfo.data.ewg_A,
                        ewg_B: itemInfo.data.ewg_B,
                        ewg_C: itemInfo.data.ewg_C,
                        ewg_D: itemInfo.data.ewg_D,
                        ewg_F: itemInfo.data.ewg_F,
                    }
                    
                });

                const params = new URLSearchParams();
                params.append("name", itemInfo.data.name);
                return axios.post("http://13.125.89.0/chemical/ingredient_list.php", params)

                    .then(res => {
                        this.setState({ingredient_list: res.data})
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    renderRatings=(config)=><RatingRow config={config} />

    render=()=>{
        const chartData = [
            Object.keys(this.state.ewg).map(key => Number(this.state.ewg[key]))
        ];

        

        return this.state.ingredient_list ?
        ( 
            <React.Fragment>
            <br />
            <div className="prod_spec" style={{marginTop:'100px'}}>
                <div className="prodspec_container">
                {/* product detail */}
                    <div className="prodspec_inner">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="prod_heading">
                                    <span className="dot"></span>
                                    <h4>제품 상세 정보 페이지</h4>
                                </div>
                                {/* product detail */}
                                <div className="prod_detail">
                                    <div className="prod_upr_img">
                                        <div className="prod_img">
                                            <img className="img-responsive" src={`http://13.125.89.0/chemical/item_img/${this.state.image}`} alt=""/>
                                        </div>
                                    </div> 
                                    <div className="prod-name-detl">
                                        <h2>카테고리 > 가정용 화학제품 > {this.state.category}</h2>
                                    </div>

                                    <div className="prod_desp">
                                        <div className="prod_name">
                                            <p>{this.state.brand}</p>
                                            <h1>{this.state.name}</h1>

                                        </div>
                                        <div className="prod_ratings">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="prod_icons">
                                            <div className="prod_icon_info">
                                                <i className="fa fa-home" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/home.svg') } alt=""/> */}
                                                <p>저장</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                {/* <img src={ require('../../../../assets/images/heart.svg') } alt=""/> */}
                                                <p>찜</p>
                                            </div>
                                            <div className="prod_icon_info prod-check-3rd-div">
                                                {/* <i className="fa fa-share-alt"></i> */}
                                                <a href={`https://search.shopping.naver.com/search/all.nhn?query=${this.state.name}`}>
                                                    <i className="fa fa-krw" aria-hidden="true"></i>
                                                </a>
                                                
                                                {/* <img src={ require('../../../../assets/images/checkPrice.svg') } alt=""/> */}
                                                <p className="check-para">가격정보</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i className="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../../../assets/images/share.svg') } alt=""/> */}
                                                <p>공유</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* finish product detail */}
                                
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="prod_right_div">
                                    <div className="prod-rt_div_inr">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <p>성분공개여부</p>
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/icon2.png')} alt=""/>
                                        {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                                        <p>성분 공개가 <br/> 잘되어 있어요!</p>
                                    </div>
                                    <div className="prod-rt_div_inr">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <p>성분공개요청</p>
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                    <img className="img-fluid" src={require('../../../../assets/images/icons/people-icon.png')} alt=""/>
                                        {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                                        <p>120명</p>
                                    </div>
                                </div>
                                {/* <div className="prod_addn"> */}
                                    <div className="prod_addn_info prod-ingt-info">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <h1>성분구성</h1>
                                    {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                {/* finish product detIL */}

                {/* PRODUCT specification */}
                <div className="product_table">
                    <div className="prod-table-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="prod_addn">
                                    <div className="prod_addn_info">
                                        <p>*해당되는 성분의 포함 여부만 알려드려요. 제품 자체의 유해성과는 거리가 있습니다.</p>
                                    </div>
                            </div>

                            {/* danger icons */}
                            <div className="danger-icons">
                                <div className="danger-icons-inr">
                                    <div className="danger-icon-head">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <h1>나쁜 성분</h1>
                                        {/* <p data-tip="dfghj" data-html={true}>Tooltip</p>
                                        <ReactTooltip html={true} /> */}
                                    </div>
                                    <div className="icons-all">
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/skin-irritation.svg')} alt=""/>
                                            {/* <p>Danger</p> */}
                                            {/* <span className="tooltiptext">
                                                <div>
                                                    <img src={require('../../../../assets/images/icons/iconB.png')} alt=""/>
                                                </div>
                                                <div>
                                                    <h2><b>Ingredient(C8-16)</b></h2>
                                                    <p>Alkyl polyglucoside(C8-16)</p>
                                                </div>
                                               
                                            </span> */}
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/respiration-toxic.svg')} alt=""/>
                                            {/* <p>Danger</p> */}
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/development-toxic.svg')} alt=""/>
                                            {/* <p>Danger</p> */}
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/cancer.svg')} alt=""/>
                                            {/* <p>Danger</p> */}
                                        </div>
                                        <div className="dngr-icon-inr-div">
                                        <img className="img-fluid" src={require('../../../../assets/images/icons/eye-irritation.svg')} alt=""/>
                                        {/* <p>Danger</p> */}
                                    </div>
                                    </div>
                                </div>
                                <div className="danger-icons-inr">
                                    <div className="danger-icon-head">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <h1>관심성분</h1>
                                    </div>   
                                    <div className="icons-all">
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/sales.png')} alt=""/>
                                                {/* <p>Danger</p> */}
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon7.png')} alt=""/>
                                                {/* <p>Danger</p> */}
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon8.png')} alt=""/>
                                                {/* <p>Danger</p> */}
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                                <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon9.png')} alt=""/>
                                                {/* <p>Danger</p> */}
                                            </div>
                                        <div className="dngr-icon-inr-div">
                                            <img className="img-fluid" src={require('../../../../assets/images/icons/danger-icon10.png')} alt=""/>
                                            {/* <p>Danger</p> */}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            {/* danger icons div finish */}
                            {/* ingredients icons */}
                                <div className="ingr-table">
                                    <div className="container">
                                    <div className="prod-ingr-ctn">
                                    <div className="prod-ingr-upr-div">
                                        <div className="prod-ingr-tbl-name">
                                            <i className="fa fa-heart" aria-hidden="true"></i>
                                            <h1>전체성분</h1>
                                        </div>
                                        <div className="prod-ingr-tbl">
                                            <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>성분등급</th>
                                                    <th>성분명</th>
                                                    <th>주의성분여부</th>
                                                    <th>유해성분여부</th>
                                                </tr>
                                                    {Object.keys(this.state.ingredient_list.total).map(key => 
                                                        <IngredientRow
                                                            letter={this.state.ingredient_list.total[key].ewg_rank}
                                                            korName={this.state.ingredient_list.total[key].name}
                                                            engName={this.state.ingredient_list.total[key].name_eng}
                                                        />
                                                    )}
                                            </thead>
                                            </table>
                                            <IngredientModal />
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            {/* finish ingredients icons */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="pie_chart">

                                </div>
                                <div className="alpha-icon">
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconX.png')} alt=""/>
                                        <p>정보없음 (중간위험)</p>

                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconA.png')} alt=""/>
                                        <p>매우 낮은 위험</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconB.png')} alt=""/>
                                        <br/>
                                        <p>낮은 위험</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconC.png')} alt=""/>
                                        <br/>
                                        <p>높은 위험</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconD.png')} alt=""/>
                                        <br/>
                                        <p>높은 위험</p>
                                    </div>
                                    <div className="alpha-icon-info">
                                        <img src={require('../../../../assets/images/icons/iconF.png')} alt=""/>
                                        <br/>
                                        <p>매우 높은 위험</p>
                                    </div>
                                </div>
                                <div className="pie-chart-info">
                                    <DoughnutGraph chartData={chartData[0]} />
                                </div>

                                {/* desp in green */}
                                <div className="desp-green">
                                    <div className="desp-greenery">
                                        <i className="fa fa-heart" aria-hidden="true"></i>
                                        <h1>인증번호</h1>
                                        <p>자가검사번호: {this.state.code}</p>
                                    </div>
                                    <div className="desp-greenery-img">
                                        <img src={require('../../../../assets/images/icons/epa-usa.png')} alt=""/>
                                    </div>
                                    <div className="desp-greenery-rslt">
                                        <h1>Greenery Description Result</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* finish product specification */}
                </div>
            </div>
            <div className="row">
                <SecondSection/>
                <ThirdSection/>
                <Comments/>
            </div>
            </React.Fragment>
        ) : (<div><br/><br/></div>);
    };
}
