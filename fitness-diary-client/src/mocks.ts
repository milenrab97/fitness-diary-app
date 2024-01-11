import {
  TemplateExercise,
  TemplateWorkoutDay,
  TemplateWorkout,
} from './types/workout';

const overhead: TemplateExercise = {
  id: '1',
  name: 'Overhead press',
  series: 3,
  reps: 5,
};
const chinup: TemplateExercise = {
  id: '2',
  name: 'Chinups',
  series: 3,
  reps: 5,
};
const squat: TemplateExercise = {
  id: '3',
  name: 'Squat',
  series: 3,
  reps: 5,
};

const day1: TemplateWorkoutDay = {
  exercises: [overhead, chinup, squat],
};
const day2: TemplateWorkoutDay = {
  exercises: [squat, overhead],
};

export const gzclp: TemplateWorkout = {
  name: 'GZCLP',
  days: [day1, day2],
};
