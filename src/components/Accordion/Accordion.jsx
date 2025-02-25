import { useEffect, useRef } from 'react';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import clsx from 'clsx';
import css from './Accordion.module.css';

const Accordion_Component = () => {
  const accordionLi = document.querySelectorAll('.accordion');

  accordionLi.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
  const accordionRef = useRef(null);
  useEffect(() => {
    if (!accordionRef.current) {
      accordionRef.current = new Accordion('.accordion-container', {
        openOnInit: [0],
      });
    }
  }, []);

  return (
    <div className="accordion-container">
      <ul class={css.list}>
        <li class={clsx('accordion', 'first', css.listItem)}>
          <div class={css.titleBtn}>
            <h3 class={css.listTitle}>
              <span>01</span> Consultation
            </h3>
            <button class={css.btnIcon} aria-label="open more information">
              <svg class="faq-svg-icon" width="20" height="20">
                <use
                  class="faq-use"
                  href="./img/faq/arrow.svg#icon-Iconarrow1"
                ></use>
              </svg>
            </button>
          </div>
          <div class="faq-text-wrap">
            <p class="faq-list-item-text first-text">
              In the field of web development, there are various technologies
              and programming languages. Typically, this includes a combination
              of frontend (client side) and backend (server side) languages.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Accordion_Component;
