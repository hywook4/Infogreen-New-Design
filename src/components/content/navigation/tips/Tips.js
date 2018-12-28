import React from 'react';
import {Link} from 'react-router-dom';
import './Tips.css';

import {StaticCard} from '../../../common/staticCard/StaticCard';
import Search from '../../search/Search';
import {Paginate} from '../../navigation/tips/pagination/Pagination';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

export class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tips: [],
        }
    }
    

    componentWillMount() {
        axios.post("http://13.125.89.0/chemical/tip.php")
            .then(res => {
                this.setState({tips: res.data});
            })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{marginTop: 83}}>
                    <div className="col-sm-1">
                    </div>
    
                    <div className="col-md-2 tipsBannnerOne">
                        <div className="tip-bnr-inr" style={{position: 'absolute', bottom: 15}}>
                            <h5><b>12월 출석체크</b></h5>
                            <p>매일 출석하고 포인트 받자!</p>
                            <h6><Link to='#'>자세히 보기
                            <i class="fa fa-angle-right"></i>
                            </Link></h6>
                        </div>
                            
                    </div>
    
                    <div className="col-md-2 tipsBannnerTwo">
                    </div>
    
                    <div className="col-md-2 tipsBannnerThree">
                    </div>
    
                    <div className="col-md-2 tipsBannnerFour">
                    </div>
    
                    <div className="col-md-2 tipsBannnerFive">
                    </div>
    
                    <div className="col-sm-1">
                    </div>
    
                </div>
                <div className="row">
                    <div className="col-md-12" style={{marginTop: 50, marginRight: 50}}>
                        <Search />
                    </div>
                </div> 
                <div className="tips-card-container">
                    <Card.Group itemsPerRow={2} stackable={true}>
                        {this.state.tips.map((tip) => 
                            <StaticCard
                                payload={tip}
                                index={tip.index_number}
                                section={"tips"}
                                image={tip.image}
                                thumbnail={`http://13.125.89.0/chemical/event_tip_thumbnail/${tip.thumbnail}`}
                                name={tip.title}
                                description={tip.content}
                            />
                        )}
                    </Card.Group>
                    
                    <Paginate />
                </div>
            </div>
        )
    }
}