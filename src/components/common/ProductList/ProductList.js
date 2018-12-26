import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from '../../common/ProductCard/ProductCard';
import axios from 'axios';

import 'semantic-ui-css';
import styles from '../../common/CommonCSS/CommonCSS.css';
import fabric1 from '../../../assets/images/fabric1.jpg';

export class ProductList extends React.Component {
    state = {
        productByVote: [],
        productByStar: []
    }

    // This messy part should go through refactoring
    componentDidMount() {
        // Search by number of votes
        const voteParams = new URLSearchParams();
        voteParams.append("category", this.props.category);
        voteParams.append("sort", "vote");

        // Search by number of stars
        const starParams = new URLSearchParams();
        starParams.append("category", this.props.category);
        starParams.append("sort", "star");

        axios.post("http://13.125.89.0/chemical/items_limit.php", voteParams)
            .then(res => {
                const products = res;
                this.setState({ productByVote: products.data[0].slice(0, 4) });
                return axios.post("http://13.125.89.0/chemical/items_limit.php", starParams)
            })
            .then(res => {
                const products = res;
                this.setState({ productByStar: products.data[0].slice(0, 4) });
            })
    }
    
    /* Axios Call Over : Refactoring Required*/

    render () {
        return(
            <div className={styles.productHeading}>
                <div className="tip-heading">
                    <i style={{color: "red"}} className="fa fa-heart" aria-hidden="true"></i>
                    <h4>카테고리별 인기제품</h4>
                </div>
                <div className={styles.rightDiv}>
                    <div className="row">
                        <Card.Group itemsPerRow={4} stackable={true} doubling={true}>
                            { 
                                this.state.productByVote.map((product, index) =>
                                <ProductCard 
                                    payload={product}
                                    key={index}
                                    src={"http://13.125.89.0/chemical/item_img/" + product.image}
                                    category={product.category}
                                    name={product.name}
                                    description={product.brand}
                                    rating={product.star}
                                />
                            )}
                        </Card.Group>
                    </div>
                </div>
                <br />
                <br />
                <div className="tip-heading">
                    <i style={{color: "red"}} className="fa fa-heart" aria-hidden="true"></i>
                    <h4>카테고리별 성분 좋은 제품</h4>
                </div>
                <div className={styles.rightDiv}>
                    <div className="row">
                        <Card.Group itemsPerRow={4} stackable={true} doubling={true}>
                            { 
                                this.state.productByStar.map((product, index) =>
                                <ProductCard 
                                    payload={product}
                                    key={index}
                                    src={"http://13.125.89.0/chemical/item_img/" + product.image}
                                    category={product.category}
                                    name={product.name}
                                    description={product.brand}
                                    rating={product.star}
                                />
                            )}
                        </Card.Group>
                    </div>
                </div>
            </div>
        );
    }
}