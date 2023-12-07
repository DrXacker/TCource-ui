import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CourseLogo = styled.View`
  justify-self: center;
`;

export const CourseContent = styled.View`
  flex: 1;
  border-radius: 16px;
  padding: 15px;
  justify-content: space-between;
`;

export const CourseTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const LessonsText = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;
