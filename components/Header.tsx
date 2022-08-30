import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	MagnifyingGlassIcon,
	ShoppingBagIcon,
	UserCircleIcon
} from '@heroicons/react/24/outline';

const Header = () => {
	const session = false;

	return (
		<header className='sticky top-0 z-30 flex items-center justify-between bg-[#E7ECEE] p-4'>
			<div className='flex items-center justify-center md:w-1/5'>
				<Link href='/'>
					<div className='relative h-10 w-5 cursor-pointer opacity-75 transition duration-700 hover:opacity-100'>
						<Image
							layout='fill'
							objectFit='contain'
							src='https://rb.gy/vsvv2o'
						/>
					</div>
				</Link>
			</div>
			<div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
				<a className='headerLink'>Product</a>
				<a className='headerLink'>Explore</a>
				<a className='headerLink'>Support</a>
				<a className='headerLink'>Business</a>
			</div>
			<div className='flex items-center justify-center gap-x-4 md:w-1/5'>
				<MagnifyingGlassIcon className='headerIcon' />
				<Link href='/checkout'>
					<div className='relative cursor-pointer'>
						<span
							className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center 
                        justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500
                        text-[10px] text-white'
						>
							5
						</span>
						<ShoppingBagIcon className='headerIcon' />
					</div>
				</Link>
				{session ? (
					<Image
						// src='https://media.wired.com/photos/59d6bc994dec4e4689be1b34/1:1/w_542,h_542,c_limit/animoji-FA.jpg'
						src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'
						alt='user image'
						className='cursor-pointer rounded-full'
						height={34}
						width={34}
						// onClick={() => signOut()}
					/>
				) : (
					<UserCircleIcon
						className='headerIcon'
						// onClick={() => signIn()}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
