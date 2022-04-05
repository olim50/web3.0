import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
			<div className='w-full flex sm:flex-row flex-col my-4 justify-between items-center'>
				<div className='flex flex-[0.5] justify-center items-center'>
					<img src={logo} alt='logo' className='w-32' />
				</div>
				<div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
					<p className='text-white text-base mx-2 cursor-pointer text-center'>Market</p>
					<p className='text-white text-base mx-2 cursor-pointer text-center'>Exchange</p>
					<p className='text-white text-base mx-2 cursor-pointer text-center'>Tutorials</p>
					<p className='text-white text-base mx-2 cursor-pointer text-center'> Wallets </p>
				</div>
			</div>
			<div className='flex justify-around items-center'>
				<p className='text-white text-sm text-center'>Присоединяйтесь! Пишите на адрес:</p>
				<p className='text-white text-sm text-center ml-4 cursor-pointer'> admin@oldnew.life</p>
			</div>
			<div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'></div>
			<div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
				<p className='text-white text-sm text-center'>@ OldNew.life, 2022 </p>
				<p className='text-white text-sm text-center'>All rights reserved</p>
			</div>
		</div>
	);
}

export default Footer;
