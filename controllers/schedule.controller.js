import Schedule from '../models/schedule.js'

export const getSchedule = async (req,res) => {
    try {
        const day = req.params.day
        const schedule = await Schedule.findOne({day})
        res.status(200).json({schedule})
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const updateSchedule = async (req, res) => {
    try {
        const day = req.params.day;
        const content = req.body.content;

        console.log('Updating schedule for day:', day);
        console.log('New content:', content);

        const schedule = await Schedule.findOne({ day });

        if (schedule) {
            schedule.content = content;
            await schedule.save();
            res.status(200).json({ message: 'Schedule updated successfully!' });
        } else {
            res.status(404).json({ message: 'Schedule for the specified day not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const createSchedule = async (req, res) => {
    try {
        const { day, content } = req.body;

        // Check if a schedule for the day already exists
        let schedule = await Schedule.findOne({ day });

        if (schedule) {
            // Update existing schedule
            schedule.content = content;
        } else {
            // Create new schedule
            schedule = new Schedule({ day, content });
        }

        await schedule.save();
        res.status(201).json({ message: 'Schedule created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
