import React from 'react';
import './ProdSpec.css';

export const RatingRow = (props)=>{
    const config = props.config;
    return(
        <div className="prod_ratings row" style={{borderBottom:config.border?'2px solid #c1bfbf':'0px',marginBottom:(config.border?20:0)}}>
        <p className="col-md-3" style={{textAlign:'center',lineHeight:'14px'}}>
            <span style={{fontSize:14,fontWeight:(!config.hideSubHeading?'bold':'normal')}}>{config.text}</span><br/>
            {!config.hideSubHeading && <span style={{fontSize:'10px',color:'rgb(156, 156, 156)'}}>(fusica)</span>}
        </p>
        <div className="col-md-9">
        <i className={`fa fa-star${(config.selected>=1?'':'-o')}`} style={{color:(config.selected>=1?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=2?'':'-o')}`} style={{color:(config.selected>=2?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=3?'':'-o')}`} style={{color:(config.selected>=3?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=4?'':'-o')}`} style={{color:(config.selected>=4?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
            <i className={`fa fa-star${(config.selected>=5?'':'-o')}`} style={{color:(config.selected>=5?'#60b3a2':'grey'),fontSize:'20px'}} aria-hidden="true"></i>
        </div>
        <div style={{clear:'both'}}></div>
    </div>    
    )
}