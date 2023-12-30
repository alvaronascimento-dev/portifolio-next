'use client'

import styles from './SkillList.module.css';

import SkillCard from '../SkillCard';
import { useEffect, useState } from 'react';



export default function SkillList() {

   const [skills, setSkills] = useState([])

   useEffect(() => {
      async function fetchSkills() {
         const response = await fetch('http://localhost:8080/skills')
         const skills = await response.json()
         setSkills(skills)
      }
      fetchSkills();
   }, [])
   return (
      <ul className={styles.skillList}>
         {skills.map((skill) =>
            <SkillCard
               key={skill.name}
               name={skill.name}
               srcIcon={skill.srcIcon}
         />)}
      </ul>
   )
}