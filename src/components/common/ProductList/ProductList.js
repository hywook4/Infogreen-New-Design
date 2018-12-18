import React from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';

import { Card } from 'semantic-ui-react';
import 'semantic-ui-css';

import styles from '../../common/CommonCSS/CommonCSS.css';
import fabric1 from '../../../assets/images/fabric1.jpg';

export const ProductList = (props) => {
    return(
        <div className={styles.productHeading}>
            <div className="tip-heading">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <h4>{props.category}</h4>
            </div>
            <div className={styles.rightDiv}>
                <div className="row">
                    <Card.Group itemsPerRow={4}>
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                        <ProductCard 
                            src={fabric1}
                            category={"주방세제"}
                            name={"어떤 세제"}
                            description={"어떤 설명"}
                            rating={3}
                        />
                    </Card.Group>
                </div>
            </div>
        </div>
    );
}