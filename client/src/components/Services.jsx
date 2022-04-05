import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
	<div className='flex flex-row justify-start items-center max-w-fit white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
		<div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
		<div className='ml-5 flex flex-col flex-1'>
			<h1 className='mt-2 text-white text-lg'>{title}</h1>
			<p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
		</div>
	</div>
);
const Services = () => {
	return (
		<div className='flex w-full flex-row md:flex-row justify-center items-center gradient-bg-services'>
			{/*<div className='flex-1 flex flex-col justify-start items-start'>*/}

			{/*</div>*/}
			<div className='flex mf:flex-row flex-col items-center justify-between md:p-34 py-16 px-8'>
				<div className='flex-1 flex flex-col justify-start items-center'>
					<h1
						className='
				text-white text-3xl text-center sm:text-5xl py-2 text-gradient mb-10'>
						Услуги, которые мы <br /> продолжаем улучшать
					</h1>

					<ServiceCard
						color='bg-[#2952e3]'
						title='Гарантия безопасности'
						icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
						subtitle='Безопасность гарантирована. Мы всегда сохраняем конфиденциальность и поддерживаем качество наших услуг.'
					/>
					<ServiceCard
						color='bg-[#8945f8]'
						title='Лучшие обменные курсы'
						icon={<BiSearchAlt fontSize={21} className='text-white' />}
						subtitle='Мы всегда стремимся обеспечить лучшие курсы конвертации и комиссий. Низкие комиссионные сборы — наша гордость.'
					/>
					<ServiceCard
						color='bg-[#f84550]'
						title='Самые быстрые транзакции'
						icon={<RiHeart2Fill fontSize={21} className='text-white' />}
						subtitle='Web 3.0, блокчейн технологии, искусственный интеллект, машинное обучение — вот что уже характеризуют современность как новую эпоху и начало становления новой мировой финансовой системы.'
					/>
				</div>
			</div>
		</div>
	);
};

export default Services;