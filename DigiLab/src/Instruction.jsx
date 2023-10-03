import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Instruction() {
	const [wrong1, setWrong1] = useState(
		'btn btn-neutral btn-sm w-[75%] text-md text-white font-bold'
	);
	const [wrong2, setWrong2] = useState(
		'btn btn-neutral btn-sm w-[75%] text-md text-white font-bold'
	);
	const [wrong3, setWrong3] = useState(
		'btn btn-neutral btn-sm w-[75%] text-md text-white font-bold'
	);
	const [right, setRight] = useState(
		'btn btn-neutral btn-sm w-[75%] text-md text-white font-bold'
	);
	const [chosen, setChosen] = useState(false);
	return landscape ? (
		<div
			className=' p-2
w-full bg-slate-500 flex justify-center item-center'
		>
			<div className='w-full bg-white h-screen text-black p-2 '>
				<div className='w-[50%] h-[60%] bg-balloon bg-center bg-cover mx-auto'></div>
				<div className='w-full h-[5%] bg-white font-bold flex justify-center items-center '>
					តើអ្នកដឹងទេថាឧស្ម័នអ្វីដែលធ្វើឲប៉េងប៉ោងហោះបាន?
				</div>
				<div className='h-១ឥ%] text-center text-l px-10 mb-2'>
					សូមជ្រើសរើសចម្លើយណាដែលត្រឹមត្រូវ
				</div>
				<div className='h-[20%] grid grid-cols-2 place-items-center px-10'>
					<button
						className={wrong1}
						onClick={() => {
							setWrong1(
								'btn btn-error btn-sm w-[75%] text-sm text-white font-bold'
							);
						}}
					>
						ឧស្ម៏នអុកសុីសែន (O2)
					</button>
					<button
						className={wrong2}
						onClick={() => {
							setWrong2(
								'btn btn-error btn-sm w-[75%] text-sm text-white font-bold'
							);
						}}
					>
						ឧស្ម៏ននីដ្រូសែន (N2)
					</button>
					<button
						className={wrong3}
						onClick={() => {
							setWrong3(
								'btn btn-error btn-sm  w-[75%] text-sm text-white font-bold'
							);
						}}
					>
						ឧស្ម៏នកាបូនឌីអុកសុីត​​ (CO2)
					</button>
					<button
						className={right}
						onClick={() => {
							setRight(
								'btn btn-success btn-sm  w-[75%] text-sm text-white font-bold'
							);
							setChosen(true);
						}}
					>
						ឧស្ម៏នអុីដ្រូសែន (H2)
					</button>
				</div>
				<div className='h-[5%] flex justify-end items-center'>
					{' '}
					<Link
						className='btn btn-primary self-end right-0'
						to='/equipment'
						style={{ visibility: chosen ? 'visible' : 'hidden' }}
					>
						បន្ទាប់
					</Link>
				</div>
			</div>
		</div>
	) : (
		<div className='text-xl text-center text-blue-400'>
			សូមបង្វិលទូរស័ព្ទមកផ្តេក រួច refresh គេហទំព៏រសាជាថ្មី
			<div>
				<button
					className='btn btn-primary'
					onClick={() => {
						location.reload();
					}}
				>
					Refresh
				</button>
			</div>
		</div>
	);
}

export default Instruction;
