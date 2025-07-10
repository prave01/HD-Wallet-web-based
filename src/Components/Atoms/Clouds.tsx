const Clouds = ({ color }: { color: string }) => {
	return (
		<div className="clouds absolute flex flex-col">
			<div
				className={`w-[50px] h-[50px] rounded-full ${color} shadow-rose-950 shadow-2xl translate-x-4`}
			>
				{" "}
			</div>
			<div
				className={`w-[50px] h-[50px] rounded-full ${color} -translate-y-10`}
			>
				{" "}
			</div>
			<div
				className={`w-[40px] h-[40px] rounded-full ${color} -translate-y-20 translate-x-10`}
			>
				{" "}
			</div>
			<div
				className={`w-[35px] h-[35px] rounded-full ${color} -translate-y-29 translate-x-15`}
			>
				{" "}
			</div>
			<div
				className={`w-[35px] h-[35px] rounded-full ${color} -translate-y-37 translate-x-5`}
			>
				{" "}
			</div>
		</div>
	);
};

export default Clouds;
