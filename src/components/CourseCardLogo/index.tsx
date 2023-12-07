import React from 'react';

import CharacterWriter from "../../assets/characters/CharacterWriter";

type Props = {
    courseCardLogo: string
}

const CourseCardLogo: React.FC<Props> = ({ courseCardLogo }) => {
   if (courseCardLogo == "CharacterMedical") {
       return (
           <CharacterWriter/>
       )
   }

    if (courseCardLogo == "CharacterMrTeacher") {
        return (
            <CharacterWriter/>
        )
    }

    if (courseCardLogo == "CharacterSinger") {
        return (
            <CharacterWriter/>
        )
    }

    if (courseCardLogo == "CharacterSport") {
        return (
            <CharacterWriter/>
        )
    }

    if (courseCardLogo == "CharacterWriter") {
        return (
            <CharacterWriter/>
        )
    }
}

export default CourseCardLogo;