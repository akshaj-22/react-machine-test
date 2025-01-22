import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AddtaskPage = () => {
    const [TaskId, setTaskId] = useState('');
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Status, setStatus] = useState('');
    const [Priority, setPriority] = useState('');


    const handleAddTask = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    TaskId,
                    Title,
                    Description,
                    Status,
                    Priority
                })
            });
            console.log("resp add doc", response)

            if (response.ok) {
                alert('Task added successfully');
                setTaskId('');
                setTitle('');
                setDescription('');
                setStatus('');
                setPriority('');
            } else {
                alert('Failed to add task');
            }
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Error adding task');
        }
    };

    // const handleDateChange = (index, date) => {
    //     const newDates = [...availableDates];
    //     newDates[index].date = date;
    //     setAvailableDates(newDates);
    // };

    // const handleTimeChange = (dateIndex, timeIndex, field, value) => {
    //     const newDates = [...availableDates];
    //     newDates[dateIndex].times[timeIndex][field] = value;
    //     setAvailableDates(newDates);
    // };

    // const addDate = () => {
    //     setAvailableDates([...availableDates, { date: '', times: [{ startTime: '', endTime: '' }] }]);
    // };

    // const removeDate = (index) => {
    //     setAvailableDates(availableDates.filter((_, i) => i !== index));
    // };

    // const addTimeSlot = (dateIndex) => {
    //     const newDates = [...availableDates];
    //     newDates[dateIndex].times.push({ startTime: '', endTime: '' });
    //     setAvailableDates(newDates);
    // };

    // const removeTimeSlot = (dateIndex, timeIndex) => {
    //     const newDates = [...availableDates];
    //     newDates[dateIndex].times = newDates[dateIndex].times.filter((_, i) => i !== timeIndex);
    //     setAvailableDates(newDates);
    // };

    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            <div className="flex-grow container mx-auto p-6">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">Add New Task</h2>
                <form onSubmit={handleAddTask} className="bg-white shadow-xl shadow-blue-500 rounded-lg p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Task Id</label>
                        <input
                            type="text"
                            value={TaskId}
                            onChange={(e) => setTaskId(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <input
                            type="text"
                            value={Status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Priority</label>
                        <input
                            type="text"
                            value={Priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className='flex gap-4 p-2'>
                        <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4" onClick={addDate}>Add Another Date</button>
                        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md mt-4">Add Doctor</button>
                    </div>
                </form>
            </div>

            <footer className="bg-blue-600 text-white p-4 text-center">
                © 2024 Task. All rights reserved.
            </footer>
        </div>
    );
};

export default AddtaskPage;
