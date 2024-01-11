export type TemplateExercise = {
  id: string;
  name: string;
  series: number;
  reps: number;
};

export type TemplateWorkoutDay = {
  exercises: TemplateExercise[];
};

export type TemplateWorkout = {
  name: string;
  days: TemplateWorkoutDay[];
};
