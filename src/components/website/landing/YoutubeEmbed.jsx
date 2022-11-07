
const YoutubeEmbed = () => {
	return (
			<iframe
				className='w-[320px] h-[200px] md:w-[700px] md:h-[400px]  2xl:w-[1400px] 2xl:h-[800px]'

				src="https://www.youtube.com/embed/fnuUEMWS9kk"
				title="About IHS Medical Inc."
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				/>
	);
};

export default YoutubeEmbed;