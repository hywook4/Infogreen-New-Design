import React from 'react';
import { Card } from 'semantic-ui-react';
import ProductCard from '../../common/ProductCard/ProductCard';
import axios from 'axios';

import 'semantic-ui-css';
import styles from '../../common/CommonCSS/CommonCSS.css';
import fabric1 from '../../../assets/images/fabric1.jpg';

export class ProductList extends React.Component {
    state = {
        chemicals: [],
    }

    componentDidMount() {
        axios.get("http://13.125.89.0/chemical/items_limit.php")
            .then(res => {
                const products = res;
                this.setState({ chemicals: products.data[0] });
                console.log(products.data[0][0].image);
            })
    }
    
    render () {
        return(
            <div className={styles.productHeading}>
                <div className="tip-heading">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <h4>{this.props.category}</h4>
                </div>
                <div className={styles.rightDiv}>
                    <div className="row">
                        <Card.Group itemsPerRow={4}>
                        { 
                            this.state.chemicals.map((chemical, index) =>
                            <ProductCard 
                                key={index}
                                src={"http://13.125.89.0/chemical/item_img/" + chemical.image}
                                category={chemical.category}
                                name={chemical.name}
                                description={chemical.brand}
                                rating={chemical.star}
                            />
                        )}
                            
                        </Card.Group>
                    </div>
                </div>
            </div>
        );
    }
}