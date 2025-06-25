import ReactIcon from '../assets/icons/reactjsIcon.svg';
import nodejsIcon from '../assets/icons/nodejsIcon.svg';
import figmaIcon from '..//assets/icons/figmaIcon.svg';
import cssIcon from '../assets/icons/cssIcon.svg';
import antDesignIcon from '../assets/icons/antdesign.svg';
import htmlIcon from '../assets/icons/htmlIcon.svg'

const INFO = {
	main: {
		title: "Portfolio By Varun",
		name: "Varun Mohan",
		email: "varunmohan277@gmail.com",
		logo: "../varun_random.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hello! 👋 I'm Varun Mohan",
		subTitle: "Frontend Developer & UI/UX Designer 🎨 | Building the web from India 🌟",
		description:
			"Passionate about creating seamless digital experiences that users love! 💝 With 2+ years in React development, I blend clean code with beautiful design to build interfaces that are both functional and delightful. ⚡🚀",
	},

	about: {
		title: "I’m Tharindu N. I live in Sri Lanka, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "TaskEnsure-The-To-do-App",
			description:
				"A modern, responsive todo application that works seamlessly online and offline. TaskEnsure helps you manage your tasks efficiently with an intuitive interface and reliable local storage.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/varun277/TaskEnsure-The-To-do-App",
		},
		{
			title: "Netflix-clone using ReactJS",
			description:
				"Developed a responsive Netflix-inspired streaming platform utilizing React.js, integrating RESTful API calls for dynamic content delivery.Integrated video playback using VideoJS library.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/varun277/Netflix-clone-using-ReactJS",
		}
	],
};

export const skills = [
	{
		icon: ReactIcon
	},
	{
		icon: "http://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript_64x64.png"
	},
	{
		icon: htmlIcon
	},
	{
		icon: cssIcon
	},
	{
		icon: nodejsIcon
	},
	{
		icon: antDesignIcon
	},
	{
		icon: figmaIcon
	}
]

export default INFO;
