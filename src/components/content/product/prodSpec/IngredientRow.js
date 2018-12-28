import React from 'react';

export const IngredientRow = (props)=>{

    const danger = props.danger ? <img className="img-responsive icon_img" src={ require('../../../../assets/images/icons/epa-usa.png') } alt=""/> : <div></div>;
    const letter = props.letter ? props.letter : 'X';
    console.log(props)
    return(
        <tr data-toggle="modal" data-target="#exampleModalCenter">
            <td>
                <img className="img-responsive icon_img" src={require(`../../../../assets/images/icons/icon${letter}.png`)} alt=""/>
            </td>
            <td>
                <p className="prod_ingr_desp">{props.korName}</p>
                <p>{props.engName}</p>
            </td>
            <td>
                {danger}
            </td>
            <td></td>
        </tr>
    )
}