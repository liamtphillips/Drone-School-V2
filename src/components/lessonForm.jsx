import React, { useState } from 'react';

const LessonForm = () => {
    const [name, setName] = useState('');
    const [lesson, setLesson] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full container lg:px-4 mx-auto mt-5 pb-20">
            <form onSubmit={handleSubmit} className="grid grids-cols-1 lg:grid-cols-3 gap-4 bg-paper bg-cover shadow-lg p-6 rounded-lg px-10">
                <div className="col-span-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pr-1 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lesson">
                            Select a lesson:
                        </label>
                        <select
                            className="shadow border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lesson"
                            value={lesson}
                            onChange={(e) => setLesson(e.target.value)}
                            required
                        >
                            <option value="">Select a lesson</option>
                            <option value="Beginner Lesson">Beginner Lesson</option>
                            <option value="Advanced Lesson">Advanced Lesson</option>
                            <option value="Cinematic Lesson">Cinematic Lesson</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            What date?
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pr-1 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date"
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                            What time?
                        </label>
                        <select
                            className="shadow border rounded w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option value="">Select a time</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                        </select>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pr-1 pl-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline mt-7"
                            type="submit"
                        >
                            Book Lesson
                        </button>
                    </div>
                </div>
            </form>

            {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-5" role="alert">
                    <h1 className="font-bold">Success! </h1>
                    <span className="block sm:inline">
                        Thanks, {name}! Your {lesson} is booked for {date} at {time}.
                    </span>
                </div>
            )}
        </div>
    );
};

export default LessonForm;
