import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import clsx from 'clsx';
import css from './Accordion.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ExpandIcon = ({ expanded }) => {
  return (
    <SvgIcon>
      {expanded ? (
        <svg aria-label="close icon" className={css.svgIcon}>
          <use href="/images/icons/sprite.svg#icon-minus"></use>
        </svg>
      ) : (
        <svg aria-label="open icon" className={css.svgIcon}>
          <use href="/images/icons/sprite.svg#icon-plus"></use>
        </svg>
      )}
    </SvgIcon>
  );
};

ExpandIcon.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={css.accordionList}>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel1' && css.expanded)}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel1'} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h3 className={css.listItemTitle}>
            01 <span className={css.titleText}>Consultation</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel2' && css.expanded)}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel2'} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h3 className={css.listItemTitle}>
            02
            <span className={css.titleText}>
              Research and Strategy Development
            </span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            In this phase, we will conduct thorough research and analysis to
            understand the market, competitors, and target audience. We will
            develop a comprehensive strategy that aligns with your business
            goals and objectives.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel3' && css.expanded)}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel3'} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <h3 className={css.listItemTitle}>
            03 <span className={css.titleText}>Implementation</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            During the implementation phase, we will execute the strategy by
            developing and deploying the necessary solutions. This includes
            designing, coding, and integrating systems to achieve the desired
            outcomes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel4' && css.expanded)}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel4'} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <h3 className={css.listItemTitle}>
            04
            <span className={css.titleText}>Monitoring and Optimization</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            In this phase, we will continuously monitor the performance of the
            deployed solutions. We will analyze data, identify areas for
            improvement, and optimize processes to ensure maximum efficiency and
            effectiveness.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel5' && css.expanded)}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel5'} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <h3 className={css.listItemTitle}>
            05
            <span className={css.titleText}>Reporting and Communication</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            During this phase, we will provide regular reports and updates on
            the progress and performance of the implemented solutions. We will
            maintain clear and open communication to keep you informed and
            involved throughout the process.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={clsx(css.listItem, expanded === 'panel6' && css.expanded)}
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon expanded={expanded === 'panel6'} />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <h3 className={css.listItemTitle}>
            06 <span className={css.titleText}>Continual Improvement</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={css.accordionInfo}>
            In the final phase, we focus on continual improvement by gathering
            feedback, analyzing results, and making necessary adjustments. Our
            goal is to ensure that the solutions continue to meet your evolving
            business needs and deliver sustainable success.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
