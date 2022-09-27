import { buildSchema } from "graphql";

const schema = buildSchema(`
   type Course {
      id: ID
      CourseName: String
      category: String
      price: Int
      language: String
      email: String
      stack: Stack
      teachingAssists: [TeachingAssist]
   }

   type TeachingAssist {
      firstName: String
      lastName: String
      experience: Int
   }

   enum Stack {
      FULL_STACK
      FRONTEND
      BACKEND
      MOBILE
      OTHER
   }

   type Query {
      getCourse(id: ID): Course
   }

   input CourseInput {
      id: ID
      CourseName: String!
      category: String
      price: Int!
      language: String
      email: String!
      stack: Stack
      teachingAssists: [TeachingAssistInput]!
   }

   input TeachingAssistInput {
      firstName: String!
      lastName: String!
      experience: Int!
   }

   type Mutation {
      createCourse(input: CourseInput): Course 
      addTeachingAssist(input: TeachingAssistInput): TeachingAssist
   }
`);

export default schema;
