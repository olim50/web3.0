import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles =
	'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';

const Input = ({ placeholder, name, type, value, handleChange }) => (
	<input
		placeholder={placeholder}
		type={type}
		step='0.0001'
		value={value}
		onChange={e => handleChange(e, name)}
		className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
	/>
);

const Welcome = () => {
	const { connectWallet, currentAccount, formData, sendTransaction, handleChange } =
		useContext(TransactionContext);

	const handleSubmit = (e) => {
		const { addressTo, amount, keyword, message } = formData;
		e.preventDefault();

		if (!addressTo || !amount || !keyword || !message) return;

		sendTransaction();
	}

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex md:flex-row flex-col items-start justify-between mf:p-8 py-6 px-4'>
				<div className='flex flex-1 justify-start flex-col mf:mr-10 -mt-5 px-12'>
					<h1 className='text-3xl  sm:text-5xl text-gradient text-center py-6'>
						Отправляйте криптовалюты <br /> по всему миру
					</h1>
					<p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Исследуйте криптомир. Легко
						<br /> покупайте и продавайте криптовалюты на Krypto.
					</p>

					{!currentAccount && (
						<button
							type='button'
							onClick={connectWallet}
							className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#1534a5]'>
							<p className='text-base font-semibold text-[#F2F0E6]'> Подключить кошелёк </p>
						</button>
					)}

					<div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-2'>
						<div className={`rounded-tl-3xl ${commonStyles}`}>Надёжность </div>

						<div className={commonStyles}>Безопасность </div>

						<div className={`rounded-tr-3xl ${commonStyles}`}>Эфириум </div>

						<div className={`rounded-bl-3xl ${commonStyles}`}>Веб 3.0 </div>

						<div className={commonStyles}>
							Низкие <br /> комиссии{' '}
						</div>

						<div className={`rounded-br-3xl ${commonStyles}`}>Блокчейн </div>
					</div>
				</div>

				<div className='flex flex-col flex-10 items-center justify-start w-full md:mt-0 mt-0'>
					<div className='p-3 justify-end items-start flex-col rounded-3xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
						<div className='flex justify-between flex-col w-full h-full'>
							<div className='flex justify-between items-start'>
								<div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
									<SiEthereum fontSize={21} color='#E1E1E1' />
								</div>

								<BsInfoCircle fontSize={19} color='#FFFFFF' />
							</div>

							<div>
								<p className='text-white font-light text-sm'>{shortenAddress(currentAccount)}</p>
								<p className='text-white font-semibold text-lg mt-1'>Ethereum</p>
							</div>
						</div>
					</div>

					<div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
						<Input placeholder='Кому:' name='addressTo' type='text' handleChange={handleChange} />

						<Input
							placeholder='Сумма (ETH)'
							name='amount'
							type='number'
							handleChange={handleChange}
						/>

						<Input
							placeholder='Ключ (Gif)'
							name='keyword'
							type='text'
							handleChange={handleChange}
						/>

						<Input placeholder='Пояснение' name='message' type='text' handleChange={handleChange} />

						<div className='h-[1px] w-full bg-gray-400 my-2' />

						{false ? (
							<Loader />
						) : (
							<button
								type='button'
								onClick={handleSubmit}
								className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>
								Отправить сейчас
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
