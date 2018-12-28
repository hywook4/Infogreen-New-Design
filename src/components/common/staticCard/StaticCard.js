import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import './StaticCard.css';


export const StaticCard = () => (
  // <Card>
  //   <Image src='http://www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg' />
    
  //   <Card.Content extra>
  //     <h6><b>Main Heading</b></h6>
  //     <p>Some related content</p>
  //     <Button style={{float:'right', backgroundColor: '#5dade2'}}>View</Button>
  //   </Card.Content>
  // </Card>

  <div className="cards-div">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 card-col">
        <div className="card-inr-div">
          <div className="card-title">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <h5>Title</h5>
          </div>
          <div className="card-img-div">
            <div className="card-img-inr-div">
              <img className="img-fluid" src={require('../../../assets/images/tips.jpg')} alt=""/>
            </div>
            <div className="card-tip-info">
              <div className="card-tip-heading">
              <h4>Tips card</h4>
              <p>Tips card Information</p>
              </div>
              <div className="card-tip-btn">
              <button type="button" class="btn btn-primary card-btn">
                <a href="/tips/tipsviewmore">View More
                <i class="fa fa-angle-right"></i>
                </a></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 card-col">
        <div className="card-inr-div">
          <div className="card-title">
            <i className="fa fa-heart card-hrt-2" aria-hidden="true"></i>
            <h5>Title</h5>
          </div>
          <div className="card-img-div">
            <div className="card-img-inr-div">
              <img className="img-fluid" src={require('../../../assets/images/tips.jpg')} alt=""/>
            </div>
            <div className="card-tip-info">
              <div className="card-tip-heading">
              <h4>Tips card</h4>
              <p>Tips card Information</p>
              </div>
              <div className="card-tip-btn">
              <button type="button" class="btn btn-primary card-btn">
                <a href="/tips/tipsviewmore">View More
                <i class="fa fa-angle-right"></i>
                </a></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 card-col">
      <div className="card-inr-div">
          <div className="card-title">
            <i className="fa fa-heart card-hrt-3" aria-hidden="true"></i>
            <h5>Title</h5>
          </div>
          <div className="card-img-div">
            <div className="card-img-inr-div">
              <img className="img-fluid" src={require('../../../assets/images/tips.jpg')} alt=""/>
            </div>
            <div className="card-tip-info">
              <div className="card-tip-heading">
              <h4>Tips card</h4>
              <p>Tips card Information</p>
              </div>
              <div className="card-tip-btn">
              <button type="button" class="btn btn-primary card-btn">
                <a href="/tips/tipsviewmore">View More
                <i class="fa fa-angle-right"></i>
                </a></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 card-col">
        <div className="card-inr-div">
          <div className="card-title">
            <i className="fa fa-heart card-hrt-4" aria-hidden="true"></i>
            <h5>Title</h5>
          </div>
          <div className="card-img-div">
            <div className="card-img-inr-div">
              <img className="img-fluid" src={require('../../../assets/images/tips.jpg')} alt=""/>
            </div>
            <div className="card-tip-info">
              <div className="card-tip-heading">
              <h4>Tips card</h4>
              <p>Tips card Information</p>
              </div>
              <div className="card-tip-btn">
              <button type="button" class="btn btn-primary card-btn">
                <a href="/tips/tipsviewmore">View More
                <i class="fa fa-angle-right"></i>
                </a></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

  </div>
)