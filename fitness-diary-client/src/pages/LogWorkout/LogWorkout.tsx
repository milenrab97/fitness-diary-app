import { useState } from 'react';
import DatePicker from '../../components/common/DatePicker';
import Select from 'react-select';
import { gzclp } from '../../mocks';
import { TemplateWorkout, TemplateWorkoutDay } from '../../types/workout';

const LogLine = ({ i = 1 }) => {
  return (
    <div className="flex items-end gap-3 ml-5 mb-1">
      <div>{i}.</div>
      <div>
        <label htmlFor="reps" className="block mb-1">
          Reps
        </label>
        <input
          id="reps"
          type="number"
          className="placeholder-gray-800 text-gray-900 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[50px] font-semibold h-6"
        />
      </div>
      <div>
        <label htmlFor="seriesNumber" className="block mb-1">
          Kilos
        </label>
        <input
          id="seriesNumber"
          type="number"
          className="placeholder-gray-800 text-gray-900 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[50px] font-semibold h-6"
        />
      </div>
    </div>
  );
};

const LogWorkout = () => {
  const workouts = [gzclp];

  const options = workouts.map((workout) => {
    return { label: workout.name, value: workout };
  });

  const [selectedOption, setSelectedOption] = useState<{
    value: TemplateWorkout;
    label: string;
  } | null>(null);

  const handleSelectChange = (
    selectedOption: { value: TemplateWorkout; label: string } | null,
  ) => {
    setSelectedOption(selectedOption);
  };
  const [selectedDay, setSelectedDay] = useState<{
    value: TemplateWorkoutDay;
    label: string;
  } | null>(null);

  const handleDayTemplateChange = (
    selectedOption: { value: TemplateWorkoutDay; label: string } | null,
  ) => {
    setSelectedDay(selectedOption);
  };

  return (
    <div className="mt-6 mb-6 ml-6">
      <div className="mb-4 flex gap-4">
        <div>
          <label className="block mb-1">Select date</label>
          <DatePicker />
        </div>
        <div>
          <label className="block mb-1">Select template</label>
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            className="text-gray-900 w-[20rem] bg-white border border-gray-400 rounded-md font-semibold"
            placeholder="Select template"
          />
        </div>
        {selectedOption && (
          <div>
            <label className="block mb-1">Select daily template</label>
            <Select
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              options={selectedOption.value.days.map((day) => ({
                label: day.exercises.map((ex) => ex.name).join(', '),
                value: day,
              }))}
              value={selectedDay}
              onChange={handleDayTemplateChange}
              className="text-gray-900 w-[20rem] bg-white border border-gray-400 rounded-md font-semibold"
              placeholder="Select template"
            />
          </div>
        )}
      </div>

      {selectedDay && (
        <div>
          {selectedDay.value.exercises.map((exercise) => (
            <div className="mb-3">
              <div className="text-xl font-bold">{exercise.name}</div>
              <div className="series flex-col">
                {[1, 2, 3].map((i) => (
                  <LogLine key={i} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogWorkout;
