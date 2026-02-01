import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

function AboutCounter() {
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'cgpaCounter', end: 8.22, duration: 2, decimals: 2 });
	useCountUp({ ref: 'techStackCounter', end: 10, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 3, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Learning"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Current CGPA"
					counter={<span id="cgpaCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Tech Skills"
					counter={<span id="techStackCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects Completed"
					counter={<span id="projectsCounter" />}
					measurement=""
				/>
			</div>
		</div>
	);
}

export default AboutCounter;
