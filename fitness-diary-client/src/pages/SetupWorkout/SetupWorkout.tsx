import { useState } from 'react';
import Input from '../../components/common/Input';
import { PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import { ClipboardDocumentIcon } from '@heroicons/react/20/solid';
import { TemplateExercise } from '../../types/workout';

const createEmptyExercise = (): TemplateExercise => {
  return {
    id: new Date().toISOString(),
    name: '',
    series: 3,
    reps: 5,
  };
};

const Exercise = ({
  data,
  handleDeleteClick,
}: {
  data: TemplateExercise;
  handleDeleteClick: (data: TemplateExercise) => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleDeleteClick(data)}
        className="cus:outline-none transform hover:scale-110 transition duration-300 ease-in-out ml-2"
      >
        <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer ml-2" />
      </button>
      <form className="flex gap-5">
        <div className="mb-4">
          <label htmlFor="exerciseName" className="block mb-1">
            Exercise Name
          </label>
          <input
            id="exerciseName"
            type="text"
            className="placeholder-gray-800 text-gray-900 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-6"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seriesNumber" className="block mb-1">
            Series
          </label>
          <input
            id="seriesNumber"
            type="number"
            className="placeholder-gray-800 text-gray-900 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[50px] font-semibold h-6"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="reps" className="block mb-1">
            Reps
          </label>
          <input
            id="reps"
            type="number"
            className="placeholder-gray-800 text-gray-900 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[50px] font-semibold h-6"
          />
        </div>
        {/* <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Exercise
          </button>
        </div> */}
      </form>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DailyWorkout = ({ dayOrder }: any) => {
  const [exercises, setExercises] = useState<TemplateExercise[]>([
    createEmptyExercise(),
  ]);

  const handlePlusClick = () => {
    setExercises((exercises) => [...exercises, createEmptyExercise()]);
  };
  const handleDeleteClick = (data: TemplateExercise) => {
    setExercises(exercises.filter((d) => d.id !== data.id));
  };

  return (
    <div>
      <div className="mb-4 flex gap-3 items-center">
        <div className="text-2xl font-bold">Day {dayOrder}</div>{' '}
        <div className="flex">
          <button
            onClick={handlePlusClick}
            className="focus:outline-none transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <PlusIcon className="h-6 w-6 text-green-500 hover:text-green-700" />
          </button>
          <button
            onClick={() => {}}
            className="focus:outline-none transform hover:scale-110 transition duration-300 ease-in-out ml-2"
          >
            <ClipboardDocumentIcon className="h-6 w-6 text-blue-500" />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {exercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            data={exercise}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </div>
  );
};

const SetupWorkout = () => {
  const [name, setName] = useState('');

  return (
    <div className="mt-6 mb-6 ml-6">
      <div className="mb-6">
        <Input label="Workout name" value={name} onChange={setName} />
      </div>

      <div>
        <DailyWorkout dayOrder={1} />
        <DailyWorkout dayOrder={2} />
      </div>
    </div>
  );
};

export default SetupWorkout;
