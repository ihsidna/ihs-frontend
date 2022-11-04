import React from 'react';

const Reviews = () => {
	return (
		<div className="w-full md:py-32 py-20 md:px-20 px-2">
			<div className=" py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
				<div className="flex justify-center items-center">
					<h2 className="md:text-4xl text-xl font-semibold pb-2 text-gray-800 border-b-2 border-b-ihs-green rounded-lg">
						Customer Reviews
					</h2>
				</div>
				<div className="grid mb-8 lg:mb-12 lg:grid-cols-2 my-10">
					<figure
						className="flex flex-col justify-center items-center p-4 text-sm text-center bg-gray-50 border-b border-gray-300 md:p-12 lg:border-r">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
							{/*<h3 className="text-lg font-semibold text-gray-900">Speechless with how easy this was to*/}
							{/*	integrate</h3>*/}
							{/*<p className="my-4">"IHS Medical Inc., was introduced to me by my daughter who felt the insurance coverage provided could be*/}
							{/*	beneficial to my aged parents who live in Lagos, Nigeria. </p>*/}
							<p className="my-4">I was particularly impressed by the company's representatives prompt attention in the provision of
								coverage information and solutions when requested. They were very attentive to the needs and limitations
								of my parents as older citizens. They provided transportation and secondary care resource personnel to
								and from hospitals/doctors’ offices.</p>
							{/*<p className="my-4">The coverage provided includes routine health checks and monitoring, medication administration,*/}
							{/*	post-operation and ambulatory care, secondary care resource, coordination and administration.</p>*/}
							<p className="my-4">I recommend IHS Medical insurance coverage to everyone who lives or has family in Nigeria and wants to
								ensure they have access to effective and efficient medical care."</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							{/*<img className="w-9 h-9 rounded-full"*/}
							{/*		 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"*/}
							{/*		 alt="profile picture"/>*/}
								<div className="space-y-0.5 font-medium text-left">
									<div> ~ Denise Odetoyinbo ~</div>
									{/*<div className="text-sm font-light text-gray-500">Developer at Open AI</div>*/}
								</div>
						</figcaption>
					</figure>
					<figure
						className="flex flex-col justify-center items-center p-4 text-sm text-center bg-gray-50 border-b border-gray-300 md:p-12">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
							{/*<h3 className="text-lg font-semibold text-gray-900">Solid foundation for any project</h3>*/}
							<p className="my-4">"It is not safe to assume your parents / family back home are in good health when they are not.</p>
							<p className="my-4">With IHS Medical, we are able to ensure that their health status is monitored and they are referred to specialists when needed.</p>
							<p className="my-4">Thank you! "</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							{/*<img className="w-9 h-9 rounded-full"*/}
							{/*		 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"*/}
							{/*		 alt="profile picture"/>*/}
								<div className="space-y-0.5 font-medium text-left">
									<div>~ Mercy Onuoha ~</div>
									{/*<div className="text-sm font-light text-gray-500">Lead designer at Dropbox</div>*/}
								</div>
						</figcaption>
					</figure>
					<figure
						className="flex flex-col justify-center items-center p-4 text-sm text-center bg-gray-50 border-b border-gray-300 lg:border-b-0 md:p-12 lg:border-r">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
							{/*<h3 className="text-lg font-semibold text-gray-900">Mindblowing workflow and variants</h3>*/}
							<p className="my-4">"I used IHS for my father, they are professional, prompt and very attentive to detail.</p>
							<p className="my-4">It gives you peace of mind  especially in uncertain times."</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							{/*<img className="w-9 h-9 rounded-full"*/}
							{/*		 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"*/}
							{/*		 alt="profile picture"/>*/}
								<div className="space-y-0.5 font-medium text-left">
									<div>~ Anthony Edohen ~</div>
									{/*<div className="text-sm font-light text-gray-500">Software Engineer at Facebook*/}
									{/*</div>*/}
								</div>
						</figcaption>
					</figure>
					<figure
						className="flex flex-col justify-center items-center p-4 text-sm text-center bg-gray-50 border-gray-300 md:p-12">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
							{/*<h3 className="text-lg font-semibold text-gray-900">Efficient Collaborating</h3>*/}
							<p className="my-4">"The service was very efficient and professional. Exceeded my expectations.</p>
							<p className="my-4">Thumbs up👍 "</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							{/*<img className="w-9 h-9 rounded-full"*/}
							{/*		 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"*/}
							{/*		 alt="profile picture"/>*/}
								<div className="space-y-0.5 font-medium text-left">
									<div>~ Oluwafeyikemi Olorunfemi ~</div>
									{/*<div className="text-sm font-light text-gray-500">CTO at Google</div>*/}
								</div>
						</figcaption>
					</figure>
				</div>

				<div className="flex justify-center md:py-10 py-6">
					<button className="bg-ihs-green py-4 px-4 md:text-2xl text-xl md:hover:bg-transparent md:hover:text-ihs-green md:hover:border-ihs-green md:hover:font-bold hover:bg-transparent hover:text-ihs-green hover:border-ihs-green hover:font-bold shadow-md">
						<a href="https://g.page/r/CT8lE-LRDH29EB0/review">Drop a Review</a>
						</button>
				</div>

			</div>
		</div>
	);
};

export default Reviews;