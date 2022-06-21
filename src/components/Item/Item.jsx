import React from 'react';
import cat from '../../img/cat.png';
import cat__unenabled from '../../img/cat__unenabled.png';
import './Item.css'

import { useState } from 'react';

function Item(props) {
  const [enabled, setEnabled] = useState(props.enabled);
  const [chosen, setChosen] = useState(props.chosen);
  const [hover, setHover] = useState(false);
  const [block, setBlock] = useState(false);

  const promo = (miceNumber) => {
    if (miceNumber === "5") {
      return <><p className='item-text_promo'><b>{props.miceNumber}</b> мышей в подарок</p><p  className='item-text_promo_add'>заказчик доволен</p></>
    }
    else if (miceNumber === "2")
      return <p  className='item-text_promo'><b>{props.miceNumber}</b> мыши в подарок</p>
    else 
      return <p  className='item-text_promo'>мышь в подарок</p>
  }

  const underText = (chosen, enabled) => {
    if (!enabled) {
      return <p className='item-underText_unenabled'>Печалька, с {props.food} закончился.</p>
    }
    if (chosen) {
      if (props.food === "фуа-гра") {
        return <p className="item-underText">Печень утки разварная с артишоками.</p>
      } 
      if (props.food === "рыбой") {
        return <p className="item-underText">Головы щучьи с чесноком да свежайшая сёмгушка.</p>
      } 
      if (props.food === "курой") {
        return <p className="item-underText">Филе из цыплят с трюфелями в бульоне.</p>
      } 
    }
    return <p className="item-underText">Чего сидишь? Порадуй котэ, <a href="##" onClick={() => chose()} rel="noreferrer">купи.</a></p>
  }

  const chose = () => {
    setChosen(!chosen);
    setBlock(!block);
    setHover(!hover);
  }

  const hoverBorder = () => {
    if (!block) {
      setHover(!hover);
    }
    else {
      setBlock(!block)
    }
  }

  return (
    <div className={enabled? 'item' : 'item__unenabled'} onClick={() => chose()} onMouseEnter={() => hoverBorder()} onMouseLeave={() => {hoverBorder()}} width="25%">

      <svg className='item-svg' height="480" viewBox="0 0 320 480" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_37_138" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"/>
      </mask>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z" fill="#F2F2F2"/>
      <path className={!enabled? 'item-border__unenabled' : (chosen ? (hover? 'item-border__chosen-hover' : 'item-border__chosen') : (hover? 'item-border__default-hover' : 'item-border__default'))} d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill="#1698D9" mask="url(#path-1-inside-1_37_138)"/>
      <mask id="path-3-inside-2_37_138" fill="white">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 42.6762V468C0 474.627 5.37259 480 12 480H308C314.627 480 320 474.627 320 468V12C320 5.37258 314.627 0 308 0H42.6762L0 42.6762Z"/>
      </mask>
      <path className={!enabled? 'item-border__unenabled' : (chosen ? (hover? 'item-border__chosen-hover' : 'item-border__chosen') : (hover? 'item-border__default-hover' : 'item-border__default'))} d="M0 42.6762L-2.82843 39.8478L-4 41.0193V42.6762H0ZM42.6762 0V-4H41.0193L39.8478 -2.82843L42.6762 0ZM4 468V42.6762H-4V468H4ZM12 476C7.58173 476 4 472.418 4 468H-4C-4 476.837 3.16345 484 12 484V476ZM308 476H12V484H308V476ZM316 468C316 472.418 312.418 476 308 476V484C316.837 484 324 476.837 324 468H316ZM316 12V468H324V12H316ZM308 4C312.418 4 316 7.58172 316 12H324C324 3.16344 316.837 -4 308 -4V4ZM42.6762 4H308V-4H42.6762V4ZM39.8478 -2.82843L-2.82843 39.8478L2.82843 45.5046L45.5046 2.82843L39.8478 -2.82843Z" fill="#1698D9" mask="url(#path-3-inside-2_37_138)"/>
      </svg>

      <img className="cat-img" src={enabled? cat : cat__unenabled} alt="Котик" />

      <div className={!enabled? 'item-weight__unenabled' : (chosen ? (hover? 'item-weight__chosen-hover' : 'item-weight__chosen') : (hover? 'item-weight__default-hover' : 'item-weight__default'))}>
          <p className='item-weight_number'>{props.weight}</p>
          <p className='item-weight_text'>кг</p>
      </div>

        {underText(chosen, enabled)}

      <div className={enabled? 'item-text' : 'item-text__unenabled'}>
        <p className='item-text_tagline'>Сказачное заморское явство</p>
        <p className='item-text_brand'>Нямушка</p>
        <p className='item-text_food'>с {props.food}</p>
        <p className='item-text_portion'><b>{props.portionsNumber}</b> порций</p>
        {promo(props.miceNumber)}
      </div>

    </div>
  );
}


export default Item;
