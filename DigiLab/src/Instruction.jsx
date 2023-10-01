import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Instruction() {
	const [wrong1, setWrong1] = useState(
		'btn btn-neutral w-[75%] text-xl text-white font-bold'
	);
	const [wrong2, setWrong2] = useState(
		'btn btn-neutral w-[75%] text-xl text-white font-bold'
	);
	const [wrong3, setWrong3] = useState(
		'btn btn-neutral w-[75%] text-xl text-white font-bold'
	);
	const [right, setRight] = useState(
		'btn btn-neutral w-[75%] text-xl text-white font-bold'
	);

	return (
		<div
			className=' p-16
w-full bg-slate-500 flex justify-center item-center'
		>
			<div className='w-full bg-white h-screen text-black p-10'>
				<div className='w-full h-[40%] bg-balloon bg-center'></div>
				<div className='w-full h-[15%] bg-white text-5xl font-bold flex justify-center items-center'>
					តើអ្នកដឹងទេថាឧស្ម័នអ្វីដែលធ្វើឲឧស្ម័នហោះបាន?
				</div>
				<div className='h-[10%] ​text-center text-3xl px-10'>
					សូមជ្រើសរើសចម្លើយណាដែលត្រឹមត្រូវ
				</div>
				<div className='h-[30%] grid grid-cols-2 place-items-center px-10'>
					<button
						className={wrong1}
						onClick={() => {
							setWrong1('btn btn-error w-[75%] text-xl text-white font-bold');
						}}
					>
						ឧស្ម៏នអុកសុីសែន (O2)
					</button>
					<button
						className={wrong2}
						onClick={() => {
							setWrong2('btn btn-error w-[75%] text-xl text-white font-bold');
						}}
					>
						ឧស្ម៏ននីដ្រូសែន (N2)
					</button>
					<button
						className={wrong3}
						onClick={() => {
							setWrong3('btn btn-error w-[75%] text-xl text-white font-bold');
						}}
					>
						ឧស្ម៏នកាបូនឌីអុកសុីត​​ (CO2)
					</button>
					<button
						className={right}
						onClick={() => {
							setRight('btn btn-success w-[75%] text-xl text-white font-bold');
						}}
					>
						ឧស្ម៏នអុីដ្រូសែន (H2)
					</button>
				</div>
				<div className='h-[5%] flex justify-end items-center'>
					{' '}
					<Link className='btn btn-primary self-end right-0' to='/equipment'>
						next
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Instruction;
