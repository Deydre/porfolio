import * as React from 'react'; import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import { BiSolidBriefcase } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

export default function CustomizedTimeline() {

  return (
    <Timeline id="timeline" sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='typeEducationDot'>
            <MdSchool />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineContent'>
          <div className="generalData">
            <h6>THE BRIDGE | 2024  // FORMACIÓN</h6>
          </div>
          <Typography variant="h6" >
            <h6 className='timelineContentTitle typeEducation' >BOOTCAMP DESARROLLO FULLSTACK</h6>
          </Typography>
          <Typography className='dataText'>
            <ul>
              <li>Frontend con React + Sass</li>
              <li>Backend con Node + Express</li>
              <li>Bases de datos con PostgreSQL y MongoDB</li>
              <li>Nociones de webscraping, testing, Docker y DevOps</li>
              <li>Metodologías ágiles (Scrum)</li>
              <li>Gestión de versiones con Git/Github</li>
              <li>Proyectos prácticos individuales y en equipo, simulando entornos reales de trabajo</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='typeWorkDot'>
            <BiSolidBriefcase />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineContent'>
          <div className="generalData">
            <h6>WAKYMA | 2022-2024 // EXPERIENCIA</h6>
          </div>
          <Typography variant="h6" >
            <h6 className='timelineContentTitle  typeWork'>DISEÑO WEB Y UX/UI</h6>
          </Typography>
          <Typography className='dataText'>
            <ul>
              <li>Mejoras de UX/UI en la plataforma Wakyma Vets</li>
              <li>Diseño, de nuevas funcionalidades desde investigación hasta producto final</li>
              <li>Rediseño de funcionalidades y landing de Wakyma</li>
              <li>Creatividades para redes sociales, cartelería, flyers y presentaciones para ferias y eventos del sector veterinario</li>
              <li>Motion Graphics. Creación y edición de vídeos promocionales para ferias</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='typeEducationDot'>
            <MdSchool />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineContent'>
          <div className="generalData">
            <h6>TRAZOS_ | 2021-2022 // FORMACIÓN</h6>
          </div>
          <Typography variant="h6" >
            <h6 className='timelineContentTitle  typeEducation'>MÁSTER EN ARTE DIGITAL Y CONCEPT ART</h6>
          </Typography>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  className='typeWorkDot'>
            <BiSolidBriefcase />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelineContent'>
          <div className="generalData">
            <h6>WAKYMA | FEB - MAY 2018 // EXPERIENCIA</h6>
          </div>
          <Typography variant="h6" >
            <h6 className='timelineContentTitle  typeWork'>DISEÑO GRÁFICO Y CREATIVIDADES</h6>
          </Typography>
          <Typography className='dataText'>
            <ul>
              <li>Diseño, rediseño y prototipado de la app de Wakyma y la app de Voze</li>
              <li>Diseño de landings para Wakyma y Adeslas</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className='typeEducationDot'>
            <MdSchool />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className='timelineContent'>
          <div className="generalData">
            <h6>/ ESNE (UDIT) | 2015-2019 //  FORMACIÓN</h6>
          </div>
          <Typography variant="h6">
            <h6 className='timelineContentTitle  typeEducation'>GRADO EN DISEÑO MULTIMEDIA Y GRÁFICO</h6>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}


