import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useJobs = () => {
	const [jobs, setJobs] = useState();
	const url = 'https://career4all-api-prod.herokuapp.com';

	useEffect(() => {
		_setJobs();
	}, []);

	async function _setJobs() {
		const jobData = {};

		try {
			jobData = await axios.get(`${url}/jobs/`);
			setJobs(jobData.data);
		} catch (e) {
			console.log(e);
		}

		return jobData.data;
	}

	return { jobs };
};
