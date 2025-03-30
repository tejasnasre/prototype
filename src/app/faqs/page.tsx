
"use client";

import * as React from 'react';
import Accordion, {
  AccordionSlots,
  accordionClasses,
} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='w-full flex justify-center items center p-10 '>
    <div >
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">What is Prototype?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Prototype is a 8-hour hackathon where participants collaborate to develop innovative web applications. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">What will be the team size?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          2-3 people in a single team.
          </Typography>
        </AccordionDetails>
      </Accordion>


      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">When and where is the hackathon taking place?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Prototype will be held on 16th April at GHRCEM. Check our Event Details page for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">What programming languages and technologies are allowed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You are free to use any programming language and technology stack for your web application.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Should we bring our own laptop?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, every team must have atleast one laptop and stable network service would be provided by us.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">What do I get by attending Prototype?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          1st winning team will get a cash prize and it will be great learning experience for all. check prizes section for more details
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Should we bring our own food?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We will provide refreshment to every participant but we still suggest participants to bring their own food or either way they can grab some food from stalls (paid).
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">What do I benefit from being part of a hackathon?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You get to learn new skills on-the-go,learn to debug errors efficiently,learn how to coordinate among a team and gain inspiration and ideas from other projects.
          </Typography>
        </AccordionDetails>
      </Accordion>


      

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}



    </div>
    </div>
  );
}
