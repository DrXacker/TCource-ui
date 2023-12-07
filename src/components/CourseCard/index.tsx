import React from 'react';
import {Container, CourseContent, CourseLogo, CourseTitle, LessonsText} from "./styles";
import {Colors} from "../../constants/Colors";
import {Logos} from "../../constants/Logos";

const plural = require('plural-ru');

interface Cover {
    color: string;
    logo: string;
}


interface Course {
    id: number;
    title: string;
    cover: Cover;

    lessons: any;
}

type Props = {
    course: Course;
}

const CourseCard: React.FC<Props> = ({course}) => {



    return (
        <Container style={{backgroundColor: Colors[course.cover.color]}}>
            <CourseLogo>
                {Logos[course.cover.logo]}
            </CourseLogo>
            <CourseContent>
                <CourseTitle>{course.title}</CourseTitle>
                <LessonsText>{course.lessons.length} {plural(course.lessons.length, 'лекция', 'лекции', 'лекций')}</LessonsText>
            </CourseContent>
        </Container>
    )
};

export default CourseCard;