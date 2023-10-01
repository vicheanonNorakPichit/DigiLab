import React from 'react';
import { Link } from 'react-router-dom';

function Equipment() {
	return (
		<div className=' p-10 w-full bg-slate-500 h-screen text-black'>
			<div className='w-full h-[15%] bg-white text-5xl font-bold flex justify-center items-center'>
				សម្ភារៈដែលត្រូវការ ដើម្បីយកមកធ្វើការពិសោធន៍មួយនេះ
			</div>
			<div className=' p-10 w-full h-[80%] bg-equipment bg-center bg-cover flex justify-end items-end'>
				<Link className='btn btn-primary btn-lg' to='/experiment'>
					ចាប់ផ្តើមការពិសោធន៍
				</Link>
			</div>
		</div>
	);
}

export default Equipment;
