import React from 'react';
import './Home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {MainPage} from '../components/MainPage';
// import {Header} from '../components/content/header/Header';
// import {Product} from '../components/content/product/Product';
import {ProdSpec} from '../components/content/product/prodSpec/ProdSpec';
// import {Route} from '../components/content/Route';
// import {ProdSpec} from '../components/content/ProdSpec';


//  import {Laundary} from '../components/content/product/laundary/Laundary';
//  import {Fabric} from '../components/content/product/fabric/Fabric';
//  import {Dishwashing} from '../components/content/product/dishwashing/Dishwashing';
//  import {Odor} from '../components/content/product/odor/Odor';
//  import {Other} from '../components/content/product/other/Other';
// import {BabyWipes} from '../components/content/product/babyWipes/BabyWipes';
// import {Cream} from '../components/content/product/cream/Cream';
// import {Hair} from '../components/content/product/hair/Hair';
// import {Lotion} from '../components/content/product/lotion/Lotion';
// import {Oil} from '../components/content/product/oil/Oil';
// import {OtherCosmetics} from '../components/content/product/otherCosmetics/OtherCosmetics';
// import {Powder} from '../components/content/product/powder/Powder';
// import {Soap} from '../components/content/product/soap/Soap';
// import {SunCare} from '../components/content/product/sunCare/SunCare';
// import {Tips} from '../components/content/navigation/tips';
import {About} from '../components/content/navigation/about/About';
import {Category} from '../components/content/navigation/category/Category';
import {Request} from '../components/content/navigation/request/Request';
import {Signup} from '../components/content/navigation/signup/Signup';
import {Login} from '../components/content/navigation/login/Login';
export const Home = ()=>{
    return(
        <div className="main-page">
        <Router>
            {/* <Header/> */}
            {/* <MainPage/> */}
            {/* <Route/> */}
            {/* <ProdSpec/> */}
            <div>
                <switch>
                    <Route path="/about" component={About} />
                    <Route path="/category" component={Category} />
                    <Route exact path="/request" component={Request} />
                    <Route path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />                                                                                                                                                                                    
                    <Route path="/" component={MainPage} exact={true}/>
                    <Route path="/product/:name" component={ProdSpec} exact={true} />
                    {/* <Route exact path="/laundary" exact={true} component={Laundary} />
                        <Route exact path="/" exact={true} component={Laundary} />
                        <Route path="/fabric" component={Fabric} />
                        <Route path="/dishwashing" component={Dishwashing} />
                        <Route path="/odor" component={Odor} />
                        <Route path="/other" component={Other} /> */}
                </switch>
                {/* <Route exact path="/" component={Tips} /> */}
                        
                {/* <div className="content-info">
                        <Route exact path="/laundary" exact={true} component={Laundary} />
                        <Route exact path="/" exact={true} component={Laundary} />
                        <Route path="/fabric" component={Fabric} />
                        <Route path="/dishwashing" component={Dishwashing} />
                        <Route path="/odor" component={Odor} />
                        <Route path="/other" component={Other} />
                        
                       
                    </div>  */}
                    {/* <div className="content-info-below">
                        <Route exact path="/soap" exact={true} component={Soap} />
                        <Route path="/lotion" component={Lotion} />
                        <Route path="/cream" component={Cream} />
                        <Route path="/oil" component={Oil} />
                        <Route path="/powder" component={Powder} />
                        <Route path="/hair" component={Hair} />
                        <Route path="/suncare" component={SunCare} />
                        <Route path="/babywipes" component={BabyWipes} />
                        <Route path="/othercosmetics" component={OtherCosmetics} />
                    </div>   */}
                    
                  
                 
                 
            
                    {/* <Route component={NotFound}/> */}
            </div>    
        </Router>
        
        </div>
    )
}